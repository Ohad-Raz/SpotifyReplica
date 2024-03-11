const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  playlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Playlist" }],
  albums: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }],
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
  createdAt: { type: Date, default: Date.now },
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = { Genre };
