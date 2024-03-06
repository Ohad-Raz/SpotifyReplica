const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlist.controller');
const { auth, authorize } = require("../middlewares/auth");


router.post('/',auth , playlistController.createPlaylist);
router.get('/',auth, playlistController.getAllPlaylists);
router.get('/:id',auth , playlistController.getPlaylistById);
router.post('/:playlistId/add-song',auth , playlistController.addSongToPlaylist);
router.delete('/:playlistId/remove-song',auth , playlistController.removeSongFromPlaylist);
router.delete('/:id', auth, playlistController.deletePlaylist);

module.exports = router;
