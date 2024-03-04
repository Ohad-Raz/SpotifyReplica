const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  biography: String,
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  albums: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album"
  }],
  songs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Song"
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = {Artist};
