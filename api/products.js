const express = require('express')
const router = express.Router()
// const knex = require('knex')

// const config=require('../knexfile.js')
// const db = knex(config.development)


router.get('/', async (req, res) => {
  try {
    return res.json([
      {id: 1, title: 'Product 1'},
      {id: 1, title: 'Product 2'},
      {id: 3, title: 'Product 3'}
    ])

  } catch (error) {
    console.error(error)
    return res.status(500).send("500 Server error")
  }
})

module.exports = router
