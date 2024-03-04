const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user.routes");
const playlistRoute = require("./routes/playlist.routes");
<<<<<<< HEAD

const routerGenre = require("./routes/genre.routes");
const songController = require("./routes/song.routes");

=======
>>>>>>> ecde85759ab0ac4265873ecb202c80a055826d2b
const songRoute = require("./routes/song.routes");
const genreRouter = require("./routes/genre.routes");
const albumRoute = require("./routes/album.routes");
const artistRoute = require("./routes/artist.routes");
const likeRoute = require("./routes/like.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/users", userRoute);
app.use("/api/v1/playlists", playlistRoute);
<<<<<<< HEAD

app.use("/api/v1/song", songController);
app.use("/api/v1/albums", albumRoute);
app.use("/api/v1/genres", routerGenre);

app.use("/api/v1/song", songRoute);
app.use("/api/v1/albums", albumRoute);
=======
app.use("/api/v1/songs", songRoute);
app.use("/api/v1/albums", albumRoute);
app.use("/api/v1/artists", artistRoute);
app.use("/api/v1/genres", genreRouter);
>>>>>>> ecde85759ab0ac4265873ecb202c80a055826d2b
app.use("/api/v1/likes", likeRoute);

module.exports = app;
