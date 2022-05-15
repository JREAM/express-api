const express = require('express')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')
const app = express()
const port = 3000

const users = require('./api/users')
const products  = require('./api/products')
// const users = require('./api/users')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(compression())
app.use(helmet())
app.use(cors())

app.use('/api/users', users)
app.use('/api/products', products)
// app.use('/api/users', users)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`)
  console.log(`Access http://localhost:${port}/`)
})
