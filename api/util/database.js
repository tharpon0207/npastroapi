const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('npastroclub', 'appuser', 'mmK!@ktDB77', {
  host: '127.0.0.1',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

module.exports = sequelize;