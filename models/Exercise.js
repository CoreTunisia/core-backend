const mongoose = require('mongoose')

  const Exercise = new mongoose.Schema({
    name: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String, // compound / isolation
    },
    muscles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Muscle',
      },
    ],
    coach: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    videoLink: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
    reps: {
      required: true,
      type: Number,
    },
    sets: {
      required: true,
      type: Number,
    },
    rest: {
      required: true,
      type: Number, // in seconds
    },
    level: {
      required: true,
      type: Number, // 1 2 or 3
    },
    instructions: {
      type: String,
      required: true,
    },
    tips: {
      type: String,
      required: true,
    },
  })

module.exports = mongoose.model('Exercises', Exercise)
