'use strict';

module.exports = { edit };
const Members = require('../model/members');
const { encrypt } = require('../util/Common');

async function edit(req, res, next) {
    const profile = req.body;
    const updatedFields = {};

    try {

        if (profile.firstname) {updatedFields.firstname = profile.firstname};
        if (profile.lastname) {updatedFields.lastname = profile.lastname};
        if (profile.email) {updatedFields.email = profile.email};
        if (profile.role) {updatedFields.role = profile.role};
        if (profile.password) {updatedFields.password = encrypt(profile.password)};
    
        if (Object.keys(updatedFields).length > 0) {
            console.log(updatedFields);
            await Members.update(updatedFields, {
                where: {
                    schoolid: profile.schoolid,
                },
            });
            res.json({
                error: false,
                message: 'User successfully edited profile',
                changes: Object.keys(updatedFields),
            });

            console.log('User profile successfully edited');
        } else {
            res.status(400).json({
                error: true,
                message: 'No fields provided for update',
            });
        }
    } catch (error) {
        console.error('Error editing user profile: ', error);
        res.status(500).json({
            error: true,
            message: 'Error editing user profile',
            details: error.message,
        });
        console.log(error.message);
    }
}
