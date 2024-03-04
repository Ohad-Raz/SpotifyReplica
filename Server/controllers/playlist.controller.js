const Playlist = require('../models/playlist');
const Song = require('../models/song');


exports.createPlaylist = async (req, res) => {
  try {
    const { title, description, owner } = req.body;
    const playlist = new Playlist({
      title,
      description,
      owner
    });
    await playlist.save();
    res.status(201).json(playlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find().populate('tracks');
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPlaylistById = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id).populate('tracks');
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.json(playlist);
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
      return res.status(404).json({ message: 'Playlist or song not found' });
    }

    playlist.tracks.push(songId);
    await playlist.save();

    res.json(playlist);
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
      return res.status(404).json({ message: 'Playlist not found' });
    }

    playlist.tracks = playlist.tracks.filter(track => track.toString() !== songId);
    await playlist.save();

    res.json(playlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};