const express = require("express");

const {
  addGenre,
  getGenres,
  searchByName,
  deleteGenre,
  getGenreById,
} = require("../controllers/genre.Controller");

const router = express.Router();

router.post("/", addGenre);
router.get("/", getGenres);
router.get("/:id", getGenreById);
router.delete("/:id", deleteGenre);
router.get("/search/:name", searchByName);

module.exports = router;
