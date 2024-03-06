const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    genre: { type: mongoose.Schema.Types.ObjectId, ref: "Genre" },
    biography: String,
    imageUrl: { type: "String" },
    publicId: { type: "String" },
    albums: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album",
      },
    ],
    songs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
      },
    ],
  },
  { timestamps: true }
);

const Artist = mongoose.model("Artist", artistSchema);

module.exports = { Artist };
