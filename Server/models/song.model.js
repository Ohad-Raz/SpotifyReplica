const mongoose = require("mongoose");

// Define schema for Song
const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  album_id: { type: mongoose.Schema.Types.ObjectId },
  genre: { type: String, required: true },
  release_date: { type: Date, required: true },
  duration: { type: Number, required: true },
  lyrics: { type: String },
  rating: { type: Number },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

// Create models based on the schemas
const Song = mongoose.model("Song", songSchema);
module.exports = { Song };
