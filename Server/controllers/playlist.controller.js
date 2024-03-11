const Playlist = require("../models/playlist.model");
const Song = require("../models/song.model");

exports.createPlaylist = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user ? req.user.id : null; // Check if req.user exists
    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }
    const playlist = new Playlist({
      title: title.trim(),
      description,
      user: userId,
    });
    await playlist.save();
    res.status(201).json(playlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find().populate("songs");
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPlaylistById = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id).populate("songs");
    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserPlaylist = async (req, res) => {
  try {
    const userId = req.params.userId;
    const playlists = await Playlist.find({ user: userId }).populate("songs");
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.deletePlaylist = async (req, res) => {
  try {
    const playlistId = req.params.id;

    const playlist = await Playlist.findByIdAndDelete(playlistId);
    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    res.json({ message: "Playlist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addSongToPlaylist = async (req, res) => {
  try {
    const playlistId = req.params.playlistId;
    const songId = req.body.songId;

    const playlist = await Playlist.findById(playlistId);
    const song = await Song.findById(songId);

    if (!playlist || !song) {
      return res.status(404).json({ message: "Playlist or song not found" });
    }

    // Check if song already in this playlist
    if (playlist.songs.includes(songId)) {
      return res
        .status(400)
        .json({ message: "Song already exists in the playlist" });
    } else {
      playlist.songs.push(songId);
      await playlist.save();

      res.json(playlist);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.removeSongFromPlaylist = async (req, res) => {
  try {
    const playlistId = req.params.playlistId;
    const songId = req.body.songId;

    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    if (!playlist.songs.includes(songId)) {
      return res
        .status(400)
        .json({ message: "Song does not exist in the playlist" });
    }

    playlist.songs = playlist.songs.filter(
      (song) => song.toString() !== songId
    );

    await playlist.save();

    res.json({
      status: "success",
      message: "Song removed from the playlist",
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.updatePlaylist = async (req, res) => {
  try {
    const { title, description } = req.body;
    const playlistId = req.params.id;

    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    playlist.title = title;
    playlist.description = description;
    await playlist.save();

    res.json(playlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
