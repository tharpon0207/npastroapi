'use strict';

// module.exports = { authenticate, encrypt, isSamePassword}
const Members = require('../model/members');
const { Sequelize } = require('sequelize');
const { isSamePassword } = require('../util/Common');
let Op = Sequelize.Op;


async function authenticate(req, res, next) {
  let email = req.body.email;

  try {
    const dbPassword = await Members.findOne({
      attributes: ['password'],
      where: {
        email: {
          [Op.eq]: email
        },
      },
    });

    if (isSamePassword(req.body.password, dbPassword.password)) {
      const userData = await Members.findAll({
        where: {
          email: {
            [Op.eq]: email
          },
        },
      });
      req.session.userData = userData[0].dataValues;
      req.session.save();
      res.json({
        error: false,
        message: 'User successfully logged in',
        user: userData
      });
    } else {
      console.log("Failed authenticating user: incorrect password");
      res.json({
        error: true,
        message: 'User failed log in: incorrect password'
      });
    }

  } catch (error) {
    console.error('Error authenticating user: ', error);
    res.status(500).json({ error: true, message: 'Error authenticating user', details: error.message });
  }

}
async function session(req, res, next) {
  if (req.session.userData) {
    res.json({ session: req.session.userData });
  } else {
    console.log("Session not found");
    res.status(404).send('Session not found');
  }
}
async function deleteSession(req, res, next) {
  if (req.session.userData) {
    req.session.destroy();
    res.json("ok");
  } else {
    res.status(404).send('Session not found');
  }
}
async function clearCookie(req, res, next) {
  res.clearCookie('nphs', { path: '/' });
  res.send('Cookie cleared');
}
module.exports = { authenticate, session, deleteSession, clearCookie };