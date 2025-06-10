const sequelize = require('../util/database');
const { DataTypes } = require('sequelize');

const Blog = sequelize.define('blogpost', {
    madebyID: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'blogpost', 
    timestamps: true    
});

module.exports = Blog;