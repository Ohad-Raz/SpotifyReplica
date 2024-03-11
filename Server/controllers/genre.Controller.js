const { Genre } = require("../models/genre.model");

const addGenre = async (req, res) => {
  try {
    let { name } = req.body;
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    const genre = new Genre({ name });
    await genre.save();
    return res.status(201).json({ status: "success", data: genre });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "error", message: error.message });
  }
};
const getGenreById = async (req, res) => {
  const { id } = req.params;

  try {
    const genre = await Genre.findById(id).populate("albums").populate("songs");

    return res.send(genre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGenres = async (req, res) => {
  try {
    const genres = await Genre.find({}).populate("albums");

    console.log(genres);
    return res.send(genres);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const deleteGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const genreRemoved = await Genre.findByIdAndDelete(id);
    return res.send(genreRemoved);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const searchByName = async (req, res) => {
  const { name } = req.params;
  try {
    const users = await Genre.find({
      name: { $regex: name, $options: "im" },
    }).limit(10);
    return res.send(users);
  } catch (error) {
    console.log(error);
    res.send("something wrong or name found");
  }
};

module.exports = {
  deleteGenre,
  getGenres,
  addGenre,
  searchByName,
  getGenreById,
};
