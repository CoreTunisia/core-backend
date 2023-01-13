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
    // TODO: add coach attribute to allow for the coach to add his own exercises and view all default exercises + his own
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
