const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: { type: "String", required: true },
  description: { type: "String" },
  artist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artist" }],
  playlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Playlist" }],
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
  albums: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }],
  createdAt: { type: Date, default: Date.now() },
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = { Genre };
