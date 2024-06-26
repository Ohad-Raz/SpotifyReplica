const { Song } = require("../models/song.model");

const { uploadToCloudinary } = require("../cloudiniryFloder/cloudinary");
const { Album } = require("../models/album.model");
const { Artist } = require("../models/artist.model");

const createSong = async (req, res) => {
  const body = req.body;

  try {
    body.user = req.user.id;
    const newSong = new Song(body);
    await newSong.save();

    await Album.findByIdAndUpdate(
      newSong.album,
      { $push: { songs: newSong._id } },
      { new: true, upsert: true }
    );
    await Artist.findByIdAndUpdate(
      newSong.artist,
      { $push: { songs: newSong._id } },
      { new: true, upsert: true }
    );

    res.status(201).json(newSong);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find({});
    console.log(songs);

    return res.send(songs);
    // return res.status(200).json({
    //   status: "success",
    //   data: {
    //     songs,
    //   },
    // });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getSongById = async (req, res) => {
  const { id } = req.params;

  try {
    const song = await Song.findById(id)
      .populate("user")
      .populate("album")
      .populate("genre");
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

const uploadAoudio = async (req, res) => {
  try {
    const data = await uploadToCloudinary(req.file.path, "post-images");
    await Song.updateOne(
      { _id: req.params.id },
      {
        $set: {
          audioUrl: data.url,
          publicId: data.public_id,
        },
      }
    );
    res.status(200).send("Song audio uploaded with success!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const uploadPicture = async (req, res) => {
  try {
    const data = await uploadToCloudinary(req.file.path, "post-images");
    await Song.updateOne(
      { _id: req.params.id },
      {
        $set: {
          imageUrl: data.url,
          publicId: data.public_id,
        },
      }
    );
    res.status(200).send("Song image uploaded with success!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getSongByGenreId = async (req, res) => {
  const { id } = req.params;

  try {
    const songs = await Song.find({ genre: id });
    return res.send(songs);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

module.exports = {
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong,
  searchByName,
  uploadAoudio,
  uploadPicture,
  getSongByGenreId,
};
