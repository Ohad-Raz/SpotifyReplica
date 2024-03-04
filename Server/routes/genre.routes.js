const express = require("express");
const { addGenre, getGenres } = require("../controllers/genre.Controller");
const router = express.Router();

router.post("/", addGenre);

router.get("/", getGenres);

router.delete("/:id", this.delete);

module.exports = router;
