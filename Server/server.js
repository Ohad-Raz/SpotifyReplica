const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { config } = require("./config/index");
dotenv.config();
const app = require("./app");

mongoose
  .connect(config.MONGO_URL)
  .then(() => {})
  .then(() => {
    console.log("connected to db");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
