const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const knex = require('knex')
const config = require('./knexfile.js')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(helmet())
app.use(cors())

const db = knex(config.development)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/users', async(req, res) => {
  await knex
    .select('first_name, last_name, email, password')
    .from('users')
    .then(data => {
      return res.json(data)
    }).catch(error => {
      return res.json({error})
     })
})

app.post('/api/users', async(res, res) => {
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



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
