const sequelize = require('../util/database');
const { DataTypes } = require('sequelize');

const Members = sequelize.define('members', {
    schoolid: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isEmail: { msg: "Please provide a valid email address" }
        }
    },
    grade: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.TINYINT,
    }
});

module.exports = Members;