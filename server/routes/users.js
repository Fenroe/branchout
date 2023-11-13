const Router = require("express-promise-router");
const { authenticateJwt } = require("../auth");
const { usersController } = require("../controllers");

const usersRouter = new Router();

usersRouter.get("/auth", authenticateJwt(), usersController.getAuthenticatedUser);

usersRouter.post("/signup", usersController.signup);
usersRouter.post("/login", usersController.login);

module.exports = usersRouter;
