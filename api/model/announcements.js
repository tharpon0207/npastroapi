const sequelize = require('../util/database');
const { DataTypes } = require('sequelize');

const Announcements = sequelize.define('announcements', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Announcements;