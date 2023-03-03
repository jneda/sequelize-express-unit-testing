const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use("/api", routes);

try {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
} catch (err) {
  console.err(err);
  process.exit(1);
}
