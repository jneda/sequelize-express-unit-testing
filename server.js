const app = require("./app");

const PORT = process.env.PORT || 3000;

try {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
} catch (err) {
  console.error(err);
  process.exit(1);
}
