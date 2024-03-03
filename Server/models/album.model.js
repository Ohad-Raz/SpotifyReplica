const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    release_date: {type: Date, required: true},
    genre: {type: String, required: true},
    rating: { type: Number },
    duration: {type: Number},
    artist_id: {type: mongoose.Schema.Types.objectId, ref: 'Artist', required: true},
    songs: [{type: mongoose.Schema.Types.objectId, ref: 'Song', required: true}]
}, {timestamps: true});

const Album = mongoose.model("Album", albumSchema);

module.exports = { Album };