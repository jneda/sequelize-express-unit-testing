const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/api", routes);

try {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
} catch (err) {
  console.err(err);
  process.exit(1);
}

module.exports = app;
