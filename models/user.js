const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  accountStatus: {
    type: Boolean,
    default: false,
  },
  activationCode: {
    type: String,
  },
  roles: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }
  ]
  
})

module.exports = mongoose.model('Users', dataSchema)