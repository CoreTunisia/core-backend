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
})
clearExisting().then(() => {
  // Create existing categories
  const muscles = [
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
  muscles.forEach(muscle =>
    muscle
      .save()
      .then(() => console.log('muscle added!'))
      .catch(err => console.error(err)),
  )
})

async function clearExisting() {
  await Muscle.deleteMany()
    .then(() => {
      console.log('Muscle collection cleared!')
    })
    .catch(err => console.error(err))
}

  