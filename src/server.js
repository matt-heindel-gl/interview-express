const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger");
const itemsRouter = require("./routes/items").router;

/**
 * Boots up the server
 * @returns the server instance
 */
const startServer = () => {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(logger);

  // Routes
  app.use("/api/items", itemsRouter);

  return app;
};

module.exports = startServer;
