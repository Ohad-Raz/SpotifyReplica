const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Playlist = mongoose.model("Playlist", playlistSchema);
module.exports = Playlist;
