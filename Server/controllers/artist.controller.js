const {Artist} = require('../models/artist.model');
const { uploadToCloudinary } = require("../cloudiniryFloder/cloudinary");

exports.createArtist = async (req, res) => {
  try {
    const { name, biography, albums, songs } = req.body;
    const artist = new Artist({
      name,
      biography,
      albums, 
      songs
    });
    await artist.save();
    res.status(201).json(artist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find().populate([
      {path: "songs"},
      {path: "albums"}
    ]);
    res.json(artists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id).populate([
      {path: "songs"},
      {path: "albums"}
    ]);
    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' });
    }
    res.json(artist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateArtist = async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  try {
      const artist = await Artist.findByIdAndUpdate(id, body, {new: true});
      if(artist) return res.send(artist)
      return res.send("Artist is not found");
  } catch (error) {
      res.status(400).send("Error");
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

exports.uploadPicture = async (req, res) => {
  try {
    const data = await uploadToCloudinary(req.file.path, "post-images");
    await Artist.updateOne(
      { _id: req.params.id },
      {
        $set: {
          imageUrl: data.url,
          publicId: data.public_id,
        },
      }
    );
    res.status(200).send("Artist image uploaded with success!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
