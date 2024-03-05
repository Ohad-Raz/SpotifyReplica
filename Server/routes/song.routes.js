const express = require("express");
const router = express.Router();
const songController = require("../controllers/song.controller");
const { auth, authorize } = require("../middlewares/auth");
const upload = require("../middlewares/upload");

// Routes for songs
router.post("/", auth, songController.createSong);
router.get("/", songController.getAllSongs);
router.get("/:id", songController.getSongById);
router.patch("/:id", auth, songController.updateSong);
router.delete("/:id", auth, songController.deleteSong);
router.get("/search/:title", songController.searchByName);

router.post(
  "/audio/:id",
  upload.single("postImage"),
  songController.uploadAoudio
);
module.exports = router;
