const validator = require("validator");

//INPUT VALIDATION
const isEmpty = (input) => {
  const error = "This field is required.";
  if (validator.isEmpty(input)) {
    return error;
  }
  return false;
};

const isNotAlphanumeric = (input) => {
  const error = "Only letters and numbers can be used.";
  if (!validator.isAlphanumeric(input, "en-GB", { ignore: " " })) {
    return error;
  }
  return false;
};

const isInvalidPhone = (input) => {
  let error = "Please enter a valid phone number";
  if (!validator.isMobilePhone(input) || isEmpty(input)) {
    return error;
  }
  return false;
};

const isInvalidEmail = (input) => {
  let error = "Please enter a valid email address";
  if (!validator.isEmail(input) || isEmpty(input)) {
    return error;
  }
  return false;
};

export { isEmpty, isNotAlphanumeric, isInvalidPhone, isInvalidEmail };
