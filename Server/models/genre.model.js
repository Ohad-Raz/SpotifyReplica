const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  albums: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }],
  createdAt: { type: Date, default: Date.now },
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = { Genre };
