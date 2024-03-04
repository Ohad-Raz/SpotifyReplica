const { Router } = require("express");
const { getAlbums } = require("../controllers/albumController")
const router = Router();

router.get("/", getAlbums);


module.exports = router;