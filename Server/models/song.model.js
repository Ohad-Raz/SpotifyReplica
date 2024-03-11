const mongoose = require("mongoose");

// Define schema for Song
const songSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    album: { type: mongoose.Schema.Types.ObjectId, ref: "Album" },
    artist: { type: mongoose.Schema.Types.ObjectId, ref: "Artist" },
    title: { type: String, required: false },
    audioUrl: { type: String, required: false },
    publicId: { type: String, required: false },
    genre: { type: mongoose.Schema.Types.ObjectId, ref: "Genre" },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }],
    release_date: { type: Date, required: false },
    duration: { type: Number, required: false },
    plays: { type: Number, default: 0 },
    lyrics: { type: String },
    rating: { type: Number },
    imageUrl: { type: "String" },
    publicId: { type: "String" },
  },
  { timestamps: true }
);

// Create models based on the schemas
const Song = mongoose.model("Song", songSchema);
module.exports = Song;
