const bcrypt = require("bcryptjs");
const {
  bodyValidators,
  handleValidationResult,
  signJwt,
} = require("../utilities");
const pool = require("../db");

module.exports.getAuthenticatedUser = async (req, res, next) => {
  try {
    console.log("in the controller")
    const userQuery = await pool.query("SELECT * FROM users WHERE id=$1", [req.user.id]);
    const user = userQuery.rows[0];
    return res.status(200).send({ user });
  }
  catch (err) {
    return next(err);
  }
}
module.exports.signup = [
  bodyValidators.firstName,
  bodyValidators.lastName,
  bodyValidators.email,
  bodyValidators.password,
  async (req, res, next) => {
    try {
      handleValidationResult(req);
      const { firstName, lastName, email, password } = req.body;
      // Check if email is in use
      const emailInUse =
        (
          await pool.query("SELECT * FROM user_credentials WHERE email=$1", [
            email,
          ])
        ).rows.length > 0;
      if (emailInUse) {
        throw new Error("That email is already being used");
      }
      // Encrypt password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Create user and return it
      const newUserResult = await pool.query(
        "INSERT INTO users (first_name, last_name, bio, tagline) VALUES ($1, $2, $3, $4) RETURNING *",
        [firstName, lastName, "", ""]
      );
      const newUser = newUserResult.rows[0];
      // Add credentials
      await pool.query(
        "INSERT INTO user_credentials (email, password, user_id) VALUES ($1, $2, $3)",
        [email, hashedPassword, newUser.id]
      );
      // Add privacy
      await pool.query(
        "INSERT INTO privacy_settings (profile_privacy, posts_privacy, user_id) VALUES ($1, $2, $3)",
        ["public", "public", newUser.id]
      );
      // Registration was successful so now the user logs in
      // Sign JWT
      const token = signJwt(newUser.id);
      // Done
      return res.status(201).send({ token, user: newUser });
    } catch (err) {
      return next(err);
    }
  },
];

module.exports.login = [
  bodyValidators.email,
  bodyValidators.password,
  async (req, res, next) => {
    try {
      console.log(req.body);
      handleValidationResult(req);
      const { email, password } = req.body;
      const credentials = await pool.query(
        "SELECT * FROM user_credentials WHERE email=$1",
        [email]
      );
      // Check if email was valid
      if (credentials.rows.length === 0) {
        throw new Error("Invalid email or password");
      }
      // Check that passwords match
      const passwordsMatch = bcrypt.compare(
        password,
        credentials.rows[0].password
      );
      if (!passwordsMatch) {
        throw new Error("Invalid email or password");
      }
      // Retrieve the user account associated with the credentials
      // We aren't joining here because we don't want to send the
      // credentials back to the client
      const userQuery = await pool.query("SELECT * FROM users WHERE id=$1", [
        credentials.rows[0].user_id,
      ]);
      const user = userQuery.rows[0];
      // Sign the token
      const token = signJwt(user.id);
      // Done
      return res.status(201).send({ token, user });
    } catch (err) {
      return next(err);
    }
  },
];
