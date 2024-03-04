const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user.routes");
const playlistRoute = require("./routes/playlist.routes");
<<<<<<< HEAD
const songController = require("./routes/song.routes");

=======
const albumRoute = require("./routes/album.routes");
>>>>>>> 4062904cde12f9ed5dd686bb78d6ba61dfa05bf0

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
<<<<<<< HEAD
app.use("/api/v1/song", songController);


// app.use('/api/v1/')
=======
app.use("/api/v1/albums", albumRoute);
>>>>>>> 4062904cde12f9ed5dd686bb78d6ba61dfa05bf0

module.exports = app;
