const exerciseDetails = require('../models/ExerciseDetails')
const WorkoutSession = require('../models/WorkoutSession')

exports.addNew = (req, res) => {
  // import workout details
  const name = req.body.name
  const description = req.body.description
  const assignedDay = req.body.assignedDay

  res.json(200, startDate)
}
