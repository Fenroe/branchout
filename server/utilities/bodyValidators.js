const { body } = require("express-validator");

module.exports.firstName = body("firstName").trim().notEmpty();
module.exports.lastName = body("lastName").trim().notEmpty();
module.exports.email = body("email").isEmail();
module.exports.password = body("password").trim().notEmpty();
