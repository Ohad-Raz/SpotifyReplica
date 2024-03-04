const { Song } = require("../models/song.model");

exports.createSong = async (req, res) => {
  try {
    const {
      title,
      user,
      album,
      genre,
      release_date,
      duration,
      lyrics,
      rating,
      imageUrl,
      publicId,
    } = req.body;
    const song = new Song({
      title,
      user,
      album,
      genre,
      release_date,
      duration,
      lyrics,
      rating,
      imageUrl,
      publicId,
    });
    await song.save();
    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllSongs = async (req, res) => {
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

exports.getSongById = async (req, res) => {
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

exports.updateSong = async (req, res) => {
  try {
    const {
      title,
      user,
      album,
      genre,
      release_date,
      duration,
      lyrics,
      rating,
      imageUrl,
      publicId,
    } = req.body;
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    song.title = title;
    song.user = user;
    song.album = album;
    song.genre = genre;
    song.release_date = release_date;
    song.duration = duration;
    song.lyrics = lyrics;
    song.rating = rating;
    song.imageUrl = imageUrl;
    song.publicId = publicId;
    song.updated_at = Date.now();
    await song.save();
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    await song.remove();
    res.json({ message: "Song deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.searchByName = async (req, res) => {
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
