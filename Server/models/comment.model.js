const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    content: {type: String, required: true},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    song_id: {type: mongoose.Schema.Types.ObjectId, ref: "Song"}

},{timestamps: true})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };