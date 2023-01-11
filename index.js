require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL
const Role = require('./models/role')
const api = require('./routes/api')
const cookieSession = require('cookie-session')
const { removeListener } = require('./models/user')
mongoose.connect(mongoString, { dbName: 'CoreDev', useNewUrlParser: true, useUnifiedTopology: true })

const database = mongoose.connection

database.on('error', error => {
  console.log(error)
  process.exit()
})

database.once('connected', () => {
  console.log('Database Connected')
  initial()
})
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(
  cookieSession({
    name: 'Core-session',
    secret: 'COOKIE_SECRET', // should use as secret environment variable
    httpOnly: true,
  }),
)

app.use('/api', api)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server Started at ${process.env.PORT}`)
})

function initial() {
  ;+Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save(err => {
        if (err) {
          console.log('error', err)
        }

        console.log("added 'user' to roles collection")
      })

      new Role({
        name: 'coach',
      }).save(err => {
        if (err) {
          console.log('error', err)
        }

        console.log("added 'coach' to roles collection")
      })

      new Role({
        name: 'admin',
      }).save(err => {
        if (err) {
          console.log('error', err)
        }

        console.log("added 'admin' to roles collection")
      })
    }
  })
}
