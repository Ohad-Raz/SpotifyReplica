const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user.routes");
const playlistRoute = require("./routes/playlist.routes");
const songRoute = require("./routes/song.routes");
const albumRoute = require("./routes/album.routes");
const artistRoute = require("./routes/artist.routes");


const app = express();
app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   next();
// });

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/users", userRoute);
app.use("/api/v1/playlists", playlistRoute);
app.use("/api/v1/songs", songRoute);
app.use("/api/v1/albums", albumRoute);
app.use("/api/v1/artists", artistRoute);


module.exports = app;
