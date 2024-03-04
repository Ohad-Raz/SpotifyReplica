const Artist = require('../models/artist.model');

exports.createArtist = async (req, res) => {
  try {
    const { name, biography } = req.body;
    const artist = new Artist({
      name,
      biography
    });
    await artist.save();
    res.status(201).json(artist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    res.json(artist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateArtist = async (req, res) => {
  try {
    const { name, biography } = req.body;
    const artist = await Artist.findById(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    artist.name = name;
    artist.biography = biography;
    await artist.save();
    res.json(artist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteArtist = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    await artist.remove();
    res.json({ message: 'Artist deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
