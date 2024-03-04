const { Genre } = require("../models/genre.model");

const addGenre = async (req, res) => {
  const body = await req.body;

  try {
    const genre = new Genre(body);
    genre.save();
    return res.send(genre);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const getGenres = async (req, res) => {
  try {
    const genres = await Genre.find({})
      .populate("user")
      .populate("playlist")
      .populate("songs")
      .populate("albums");
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

module.exports = { deleteGenre, getGenres, addGenre };
