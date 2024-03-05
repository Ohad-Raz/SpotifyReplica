const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist.controller');
const upload = require("../middlewares/upload");

router.post('/', artistController.createArtist);
router.post("/image/:id", upload.single("postImage"), artistController.uploadPicture);
router.get('/', artistController.getAllArtists);
router.get('/:id', artistController.getArtistById);
router.patch('/:id', artistController.updateArtist);
router.delete('/:id', artistController.deleteArtist);

module.exports = router;
