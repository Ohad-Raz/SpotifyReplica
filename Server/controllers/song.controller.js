const { Song } = require("../models/song.model");

const createSong = async (req, res) => {
  const body = req.body;
  try {
    console.log(req.user);
    body.user = req.user.id; 
    const newSong = new Song(body);
    await newSong.save();
    res.status(201).json(newSong);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find({}).populate("user album genre");
    res.status(200).json({
      status: "success",
      data: {
        songs,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id).populate(
      "user album genre"
    );
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSong = async (req, res) => {
  const body = req.body;
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    Object.assign(song, body); 
    song.updated_at = Date.now();
    await song.save();
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    await song.deleteOne(); // or song.deleteMany() if needed
    res.json({ message: "Song deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchByName = async (req, res) => {
  const { title } = req.params;
  try {
    const songs = await Song.find({
      title: { $regex: title, $options: "im" },
    }).limit(10);
    return res.send(songs);
  } catch (error) {
    console.log(error);
    res.send("something wrong or name found");
  }
};

module.exports = { createSong, getAllSongs, getSongById, updateSong, deleteSong, searchByName };
