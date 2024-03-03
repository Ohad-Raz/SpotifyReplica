const Song = require("../models/song.model.js");

exports.getAllSongs = async((req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json({
            status: "success",
            data: {
                songs
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}) 
