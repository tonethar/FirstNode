const message = "hello other file";

const getMessage = () => {
  console.log(message);
  return message;
};

//module.exports.getMessage = getMessage;

module.exports = {
  getMessage,
};