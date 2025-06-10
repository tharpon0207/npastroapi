'use strict';
const bcrypt = require ('bcrypt');
const salt = "$2b$10$DTIUElO2vmp0MM2s2Ltp6O";

function encrypt(password) {
  return bcrypt.hashSync(password, salt);
}

function isSamePassword(password, hash) {
  return bcrypt.compareSync(password, hash)
}
module.exports = { encrypt,  isSamePassword, salt};