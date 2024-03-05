const { Album } = require("../models/album.model");

const getAlbums = async (req, res) => {
  try {
    const query = req.query;
    const albums = await Album.find({ ...query }).populate({path: "songs"});
    res.send({ status: "Got albums succesfully", data: albums });
  } catch (error) {
    res.status(400).send("Error");
  }
};

const getSingleAlbum = async (req, res) => {
  const { id } = req.params;
  try {
    const singleAlbum = await Album.findById(id).populate({path: "songs"});
    if (singleAlbum) return res.send(singleAlbum);
    res.send("Couldn't find album");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const addNewAlbum = async (req, res) => {
  const { title, release_date, genre, artist_id, songs } = req.body;
  try {
    const newAlbum = new Album({
      title,
      release_date,
      genre,
      artist_id,
      songs,
    });
    newAlbum.id = newAlbum._id;
    await newAlbum.save();
    res.send("Album added!", newAlbum);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteAlbum = async (req, res) => {
  const { id } = req.params;
  try {
    await Album.findByIdAndDelete(id);
    return res.send("Succesfully deleted album");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
};
const uploadPicture = async (req, res) => {
  try {
    const data = await uploadToCloudinary(req.file.path, "post-images");
    await Album.updateOne(
      { _id: req.params.id },
      {
        $set: {
          imageUrl: data.url,
          publicId: data.public_id,
        },
      }
    );
    res.status(200).send("user image uploaded with success!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = {
  getAlbums,
  getSingleAlbum,
  addNewAlbum,
  deleteAlbum,
  uploadPicture,
};
