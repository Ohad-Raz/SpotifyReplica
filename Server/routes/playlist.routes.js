const express = require("express");
const router = express.Router();
const playlistController = require("../controllers/playlist.controller");
const { auth } = require("../middlewares/auth");

router
  .route("/")
  .get(playlistController.getAllPlaylists)
  .post(auth, playlistController.createPlaylist);

router.use(auth);

router
  .route("/:id")
  .get(playlistController.getPlaylistById)
  .patch(playlistController.updatePlaylist)
  .delete(playlistController.deletePlaylist);

router.get("/users/:userId", playlistController.getUserPlaylist);

router.post("/:playlistId/add-song", playlistController.addSongToPlaylist);

router.delete(
  "/:playlistId/remove-song",
  playlistController.removeSongFromPlaylist
);

module.exports = router;
