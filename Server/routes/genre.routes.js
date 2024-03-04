const express = require("express");
const { addGenre, getGenres,deleteGenre } = require("../controllers/genre.Controller");
const router = express.Router();

router.post("/", addGenre);

router.get("/", getGenres);

router.delete("/:id", deleteGenre);

module.exports = router;
