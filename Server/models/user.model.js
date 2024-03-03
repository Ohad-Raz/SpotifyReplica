const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  profilePicture: String,
  subscriptionType: String,
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  likedTracks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Track" }],
  likedAlbums: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }],
  playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Playlist" }],
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
