const { passport } = require("../config");

const authenticateJwt = () => {
  console.log("authenticateJwt")
  const options = {
    session: false,
  };
  return passport.authenticate("jwt", options);
};

module.exports = authenticateJwt;
