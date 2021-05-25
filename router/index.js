const appRouter = require("express").Router();
const apiRouter = require("./apiRouter");

appRouter.use("/api", apiRouter);

module.exports = appRouter;
