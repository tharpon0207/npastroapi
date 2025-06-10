'use strict';
const Members = require('../model/members');
const { Sequelize } = require('sequelize');
const { encrypt } = require('../util/Common');
let Op = Sequelize.Op;

module.exports = { signup }

async function signup(req, res, next) {
  let member = req.body;
  try {
    const newMember = await Members.create({
      schoolid: member.schoolid,
      firstname: member.firstname,
      lastname: member.lastname,
      email: member.email,
      grade: member.grade,
      password: encrypt(member.password),
      role: "member",
      status: 1
    });
    newMember.password = "hidden";

    console.log('New user added:', newMember.toJSON());

    res.json({
      error: false,
      message: 'User successfully created',
      user: newMember 
    });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: true, message: 'Error adding user', details: error.message });
  }
}
