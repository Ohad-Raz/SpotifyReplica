const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlist.controller');

router.post('/playlists', playlistController.createPlaylist);
router.get('/playlists', playlistController.getAllPlaylists);
router.get('/playlists/:id', playlistController.getPlaylistById);
router.post('/playlists/:playlistId/add-song', playlistController.addSongToPlaylist);
router.delete('/playlists/:playlistId/remove-song', playlistController.removeSongFromPlaylist);

module.exports = router;
