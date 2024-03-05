const mongoose = require("mongoose");

// Define schema for Song
const songSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album' },
  title: { type: String, required: false },
  imageUrl: { type: String , required: false}, 
  publicId: { type: String , required: false},
  genre: [{ type: String, required: false, ref: 'Genre' }, ],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }], 
  release_date: { type: Date, required: false },
  duration: { type: Number, required: false },
  plays: { type: Number, default: 0 },
  lyrics: { type: String },
  rating: { type: Number }
}, { timestamps: true });

// Create models based on the schemas
const Song = mongoose.model("Song", songSchema);
module.exports =  Song ;
