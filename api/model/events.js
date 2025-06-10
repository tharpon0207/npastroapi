const sequelize = require('../util/database');
const { DataTypes } = require('sequelize');

const Events = sequelize.define('events', {
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
    },
    Month: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Day: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start: {
        type: DataTypes.STRING,
        allowNull: false
    },
    end: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Events;