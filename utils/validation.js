const { body } = require("express-validator/check");

const inputValidation = [
  body("name")
    .isString()
    .not()
    .isEmpty(),
  body("word").isString()
];

module.exports = {
  inputValidation
};
