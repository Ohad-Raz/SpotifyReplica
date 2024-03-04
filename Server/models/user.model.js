const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: "String", required: true },
  password: { type: "String", required: true },
  name: { type: "String", required: true },
  imageUrl: { type: "String" },
  publicId: { type: "String" },
  subscriptionType: { type: "String" },
  role: { type: "String", default: "user" },
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  likedTracks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Track" }],
  likedAlbums: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }],
  playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Playlist" }],
  artist: { type: mongoose.Schema.Types.ObjectId, ref: "Artist" },
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
