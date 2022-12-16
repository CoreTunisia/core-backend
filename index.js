require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL
const users = require('./routes/api/users')
const api = require('./routes/api')

mongoose.connect(mongoString, { dbName: 'CoreDev', useNewUrlParser: true, useUnifiedTopology: true })

const database = mongoose.connection

database.on('error', error => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected')
})
const app = express()

app.use(express.json())

app.use('/api', api)

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`)
})
