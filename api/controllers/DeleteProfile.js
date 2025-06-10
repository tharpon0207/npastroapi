'use strict';

module.exports = { deleteProfile };
const Members = require('../model/members');
const { Sequelize } = require('sequelize');
let Op = Sequelize.Op;

async function deleteProfile(req, res, next) {
    var id = req.swagger.params.id.value;


    try{
        await Members.destroy({
            where: {
                schoolid: id
            },
        }); 

        res.json({
            error: false,
            message: "user successfully deleted",
            member: {schoolid: id}
            }
        )
    }catch(error){
        console.error('Error deleting user: ', error);
        res.status(500).json({
            error: true,
            message: 'Error deleting user profile',
            details: error.message,
        });
    }
}

