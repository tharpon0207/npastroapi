'use strict';

module.exports = { getMembers };
const Members = require('../model/members');
const { Sequelize } = require('sequelize');
let Op = Sequelize.Op;

async function getMembers(req, res, next){
    try{
        const data = await Members.findAll({
            attributes: [Sequelize.col('schoolid'), 'schoolid', 'firstname', 'lastname', 'email', 'role', 'grade'],

        })
        res.json(data);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}