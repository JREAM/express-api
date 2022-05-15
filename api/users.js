const express = require('express')
const router = express.Router()
const knex = require('knex')

const config=require('../knexfile.js')
const db = knex(config.development)


router.get('/', async(req, res) => {
  await knex
    .select('first_name, last_name, email, password')
    .from('users')
    .then(data => {
      return res.json(data)
    }).catch(error => {
      return res.json({error})
     })
})

router.post('/', async(req, res) => {
  const email = req.body.email
  const password = req.body.password
  const confirmPassword = req.body.password

  if (password !== confirmPassword) {
    return res.json({error: "Passwords do not match."})
  }

  await knex('users')
    .insert(payload)
    .then(data => {
      return res.json(data)
    }).catch(error => {
      return res.json({error})
    })
})

module.exports = router
