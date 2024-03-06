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
    const genres = await Genre.find({}).populate("songs");

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

module.exports = { deleteGenre, getGenres, addGenre, searchByName };
