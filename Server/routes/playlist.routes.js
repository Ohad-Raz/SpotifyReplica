const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlist.controller');
const { auth, authorize } = require("../middlewares/auth");



router.post('/',auth , playlistController.createPlaylist);
router.get('/', playlistController.getAllPlaylists);
router.get('/:id', playlistController.getPlaylistById);
router.post('/:playlistId/add-song', playlistController.addSongToPlaylist);
router.delete('/:playlistId/remove-song', playlistController.removeSongFromPlaylist);
router.delete('/:id', auth, playlistController.deletePlaylist);

module.exports = router;
