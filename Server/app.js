const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user.routes");
const playlistRoute = require("./routes/playlist.routes");
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
app.use("/api/v1/songs", songRoute);
app.use("/api/v1/albums", albumRoute);
app.use("/api/v1/artists", artistRoute);
app.use("/api/v1/genres", genreRouter);
app.use("/api/v1/likes", likeRoute);

module.exports = app;
