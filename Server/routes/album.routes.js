const { Router } = require("express");
const upload = require("../middlewares/upload");
const {
  getAlbums,
  getSingleAlbum,
  addNewAlbum,
  deleteAlbum,
  uploadPicture,
  // getAlbumsByGenreId,
} = require("../controllers/albumController");
const router = Router();

router.get("/", getAlbums);
router.get("/:id", getSingleAlbum);
// router.get("/search/:genre", getAlbumsByGenreId);
router.post("/", addNewAlbum);
router.delete("/:id", deleteAlbum);
router.post("/image/:id", upload.single("postImage"), uploadPicture);

module.exports = router;
