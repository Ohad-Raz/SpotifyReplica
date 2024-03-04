const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user.routes");
const playlistRoute = require("./routes/playlist.routes");


const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/users", userRoute);
app.use("/api/v1/playlists", userRoute);

// app.use('/api/v1/')

module.exports = app;
