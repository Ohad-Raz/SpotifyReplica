const { Router } = require("express");
const { getAlbums, getSingleAlbum, addNewAlbum, deleteAlbum } = require("../controllers/albumController")
const router = Router();

router.get("/", getAlbums);
router.get("/:id", getSingleAlbum);
router.post("/", addNewAlbum);
router.delete("/:id", deleteAlbum);


module.exports = router;