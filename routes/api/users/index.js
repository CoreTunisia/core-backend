const express = require('express')
const router = express.Router()
const userModel = require('../../../models/user')
const { verifySignUp } = require("../../../middlewares");
const controller = require("../../../controllers/auth.controller");
const controlleruser = require("../../../controllers/user.controller");
const { authJwt } = require("../../../middlewares");



router.post(
    '/auth/signup',
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  )

//authentication routes
router.post('/auth/signin', controller.signin)
router.get('/confirm_user/:activationCode',controller.confirm)
router.post('/auth/signout', controller.signout)

//user routes
router.get('/test/all', controlleruser.allAccess)
router.get('/test/user', [authJwt.verifyToken], controlleruser.userBoard)
router.get(
  '/test/mod',
  [authJwt.verifyToken, authJwt.isCoach],
  controlleruser.coachBoard
)
router.get(
  '/test/admin',
  [authJwt.verifyToken, authJwt.isAdmin],
  controlleruser.adminBoard
)


module.exports = router
