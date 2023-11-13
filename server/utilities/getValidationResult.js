const { validationResult } = require("express-validator");

const handleValidationResult = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new Error("Validation failed");
  }
};

module.exports = handleValidationResult;