const config = require("../config/auth.config");
const express = require("express");
const router = express.Router();
const User = require("../models/user")
const Role = require("../models/role")
const nodemailer = require("../config/nodemailer.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  
  const characters =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let randomCode = "";
for (let i = 0; i < 25; i++) {
  randomCode += characters[Math.floor(Math.random() * characters.length)];
}
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    activationCode: randomCode,
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }



    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
            nodemailer.sendConfirmationEmail(
              user.username,
              user.email,
              user.activationCode,
            );
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
          nodemailer.sendConfirmationEmail(
            user.username,
            user.email,
            user.activationCode,
          );
        });
      });
    }
  });
};


exports.confirm = (req, res) => {
  User.findOne({
    activationCode: req.params.activationCode,
  })
    .then((user) => {
      if (!user) {
        return res.send({
          message: "le code d'activation semble étre faux !",
        });
      } else if (user && user.accountStatus == true) {
        return res.send({
          message: "Votre compte est déja activé !",
        });
      } else {
        user.accountStatus = true;
        user.save((err) => {
          return res.send({
            message: "Votre compte est activé avec succées !",
          });
        });
      }
    })
    .catch((e) => console.log("error", e));
};


exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
      }

     if (user.accountStatus === false) {
        return res.status(401).send({message : "Account not activated. Please Verify your email."});
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }

      req.session.token = token;

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        token: token,
        roles: authorities,
      });
    });
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};