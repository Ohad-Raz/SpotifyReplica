const express = require("express");
const router = express.router();
const songController = require("../controllers/songController");

router.get("/", songController.getAllSongs);
router
  .route("/:name")
  .get(songController.getSong)
  .post(songController.addSong)
  .patch(songController.editSong)
  .delete(songController.deleteSong);

router;
module.exports = router;
