require('dotenv').config()

const mongoose = require('mongoose')
const Muscle = require('./models/Muscle')

// Connect to the database
mongoose.connect(process.env.DATABASE_URL, { dbName: 'CoreDev', useNewUrlParser: true, useUnifiedTopology: true })
const database = mongoose.connection

database.on('error', error => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected')
  seed()
})

async function seed() {
  clearExisting()
  setTimeout(() => {
    // Create existing categories
    const categories = [
      new Muscle({
        name: 'Abs',
        image: 'link.com/identifier',
      }),
      new Muscle({
        name: 'Shoulders',
        image: 'link.com/identifier',
      }),
      new Muscle({
        name: 'Quads',
        image: 'link.com/identifier',
      }),
      new Muscle({
        name: 'Triceps',
        image: 'link.com/identifier',
      }),
      new Muscle({
        name: 'Biceps',
        image: 'link.com/identifier',
      }),
      new Muscle({
        name: 'Back',
        image: 'link.com/identifier',
      }),
      new Muscle({
        name: 'Forearm',
        image: 'link.com/identifier',
      }),
      new Muscle({
        name: 'Chest',
        image: 'link.com/identifier',
      }),
    ]
    // Save the user to the database
    categories.forEach(category =>
      category
        .save()
        .then(() => console.log('category added!'))
        .catch(err => console.error(err)),
    )
  }, 3000)
}

async function clearExisting() {
  return new Promise((resolve, reject) => {
    Muscle.deleteMany()
      .then(() => console.log('Muscle collection cleared!'))
      .catch(err => console.error(err))
    resolve()
  })
}

  