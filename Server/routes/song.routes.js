const express = require("express");
const router = express.Router();
const songController = require("../controllers/song.controller");

// Routes for songs
router.post("/", songController.createSong);
router.get("/", songController.getAllSongs);
router.get("/:id", songController.getSongById);
router.patch("/:id", songController.updateSong);
router.delete("/:id", songController.deleteSong);
router.get("/search/:title", songController.searchByName);
router.post("/audio/:id", songController.uploadAoudio);
module.exports = router;
