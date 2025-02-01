const validate = (value, callback) => {
  let error = callback(value);
  if (error) {
    return error;
  } else {
    return "";
  }
};
const validateNonEmpty = (str) => {
  if (str === "") return "Please fill in this field.";
  else return "";
};

const validatePhone = (str) => {
  const regex = /^(?:\+?1\s?)?(?:\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
  if (str === "") return "Please fill in this box.";
  else if (!regex.test(str)) return "Please enter valid phone number";
  else return "";
};

const validateEmail = (str) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (str === "") return "Please fill in this box.";
  else if (!regex.test(str)) return "Please enter valid email address";
  else return "";
};

export { validate, validateNonEmpty, validatePhone, validateEmail };
