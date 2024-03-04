const express = require("express");
<<<<<<< HEAD
const {
  addGenre,
  getGenres,
  searchByName,
  deleteGenre,
} = require("../controllers/genre.Controller");

=======
const { addGenre, getGenres,deleteGenre } = require("../controllers/genre.Controller");
>>>>>>> ecde85759ab0ac4265873ecb202c80a055826d2b
const router = express.Router();

router.post("/", addGenre);

router.get("/", getGenres);

router.delete("/:id", deleteGenre);
<<<<<<< HEAD

router.get("/search/:name", searchByName);
=======
>>>>>>> ecde85759ab0ac4265873ecb202c80a055826d2b

module.exports = router;
