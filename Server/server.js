const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { config } = require("./config/index");
dotenv.config();
const app = require("./app");

// const db = process.env.DATABASE.replace(
//   "<password>",
//   process.env.DATABASE_PASSWORD
// );
// mongoose
//   .connect(db)
//   .then(() => {
//     console.log("MongoDB Connected");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err.message);
//   });

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
