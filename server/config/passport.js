const passport = require("passport");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const pool = require("../db");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_KEY,
};

const jwtStrategy = new JwtStrategy(options, async (payload, done) => {
  try {
    const id = payload.sub;
    const userQuery = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    const user = userQuery.rows[0];
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

passport.use(jwtStrategy);

module.exports = passport;
