const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.name = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.name = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.name = "Password field is required";
  }

  if (Validator.isEmpty(data.password, { min: 6, max: 30 })) {
    errors.name = "Password must be at least 6 chars";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
