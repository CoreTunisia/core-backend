require('dotenv').config()

const mongoose = require('mongoose')
const ExerciseCategory = require('./models/exerciseCategory')

// Connect to the database
mongoose.connect(process.env.DATABASE_URL, { dbName: 'CoreDev', useNewUrlParser: true, useUnifiedTopology: true })
const database = mongoose.connection

database.on('error', error => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected')
})
ExerciseCategory.deleteMany()
  .then(() => console.log('ExerciseCategory collection cleared!'))
  .catch(err => console.error(err))

// Create existing categories
const categories = [
  new ExerciseCategory({
    name: 'Abs',
    image: 'link.com/identifier',
  }),
  new ExerciseCategory({
    name: 'Shoulders',
    image: 'link.com/identifier',
  }),
  new ExerciseCategory({
    name: 'Quads',
    image: 'link.com/identifier',
  }),
  new ExerciseCategory({
    name: 'Triceps',
    image: 'link.com/identifier',
  }),
  new ExerciseCategory({
    name: 'Biceps',
    image: 'link.com/identifier',
  }),
  new ExerciseCategory({
    name: 'Back',
    image: 'link.com/identifier',
  }),
  new ExerciseCategory({
    name: 'Forearm',
    image: 'link.com/identifier',
  }),
  new ExerciseCategory({
    name: 'Chest',
    image: 'link.com/identifier',
  }),
]

setTimeout(() => {
  // Save the user to the database
  categories.forEach(category =>
    category
      .save()
      .then(() => console.log('category added!'))
      .catch(err => console.error(err)),
  )
}, 2000)
