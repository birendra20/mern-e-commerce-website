const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

dotenv.config({ path: "backend/config/config.env" });

const server = app.listen(8080, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
