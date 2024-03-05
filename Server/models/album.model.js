const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    release_date: { type: Date, required: true },
    genre: { type: String, required: true },
    rating: { type: Number },
    duration: { type: Number },
    imageUrl: { type: "String" },
    publicId: { type: "String" },
    artist_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
      required: true,
    },
    songs: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Song", required: true },
    ],
  },
  { timestamps: true }
);

const Album = mongoose.model("Album", albumSchema);

module.exports = { Album };
