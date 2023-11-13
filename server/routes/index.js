const Router = require("express-promise-router");
const usersRouter = require("./users");

const apiRouter = new Router();

apiRouter.use("/users", usersRouter);

module.exports = apiRouter;
