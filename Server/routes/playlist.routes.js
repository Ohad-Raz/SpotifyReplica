const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlist.controller');

router.post('/', playlistController.createPlaylist);
router.get('/', playlistController.getAllPlaylists);
router.get('/:id', playlistController.getPlaylistById);
router.post('/:playlistId/add-song', playlistController.addSongToPlaylist);
router.delete('/:playlistId/remove-song', playlistController.removeSongFromPlaylist);

module.exports = router;
