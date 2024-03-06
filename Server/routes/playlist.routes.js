const express = require("express");
const router = express.Router();
const playlistController = require("../controllers/playlist.controller");
const { auth, authorize } = require("../middlewares/auth");

router.post("/", auth, playlistController.createPlaylist);
router.get("/", playlistController.getAllPlaylists);
router.get("/:id", auth, playlistController.getPlaylistById);
router.get("/users/:userId", auth, playlistController.getUserPlaylist);
router.patch("/:id", auth, playlistController.updatePlaylist); // Add this line for updating playlist

router.post(
  "/:playlistId/add-song",
  auth,
  playlistController.addSongToPlaylist
);
router.delete(
  "/:playlistId/remove-song",
  auth,
  playlistController.removeSongFromPlaylist
);
router.delete("/:id", auth, playlistController.deletePlaylist);

module.exports = router;
