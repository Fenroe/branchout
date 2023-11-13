const jwt = require("jsonwebtoken");

const signJwt = (id) => {
  const payload = {
    sub: id,
    iat: Date.now(),
  };
  const token = jwt.sign(payload, process.env.JWT_KEY);
  return token;
};

module.exports = signJwt;
