const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  biography: String,

  albums: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album"
  }],
  songs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Song"
  }],

 },
  { timestamps: true });

const Artist = mongoose.model("Artist", artistSchema);

module.exports = {Artist};
