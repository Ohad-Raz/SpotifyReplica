const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
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
  },
  { toJSON: { virtuals: true } }
); // Include virtual properties in JSON representation

// Define a virtual property to calculate the total length of songs
playlistSchema.virtual("totalLength").get(function () {
  let totalLength = 0;
  console.log(this.songs.length);
  if (this.songs && this.songs.length > 0) {
    totalLength += this.songs.length;
  }
  return totalLength;
});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;
