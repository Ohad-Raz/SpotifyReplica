const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    song_id: {type: mongoose.Schema.Types.ObjectId, ref: "Song"},
    album_id: {type: mongoose.Schema.Types.ObjectId, ref: "Album"},
    playlist_id: {type: mongoose.Schema.Types.ObjectId, ref: "Playlist"},

},{timestamps: true})

const Like = mongoose.model("Like", likeSchema);

module.exports = { Like };