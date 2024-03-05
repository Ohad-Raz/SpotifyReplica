const { Router } = require("express");
const upload = require("../middlewares/upload");
const {
  getAlbums,
  getSingleAlbum,
  addNewAlbum,
  deleteAlbum,
  uploadPicture,
} = require("../controllers/albumController");
const router = Router();

router.get("/", getAlbums);
router.get("/:id", getSingleAlbum);
router.post("/", addNewAlbum);
router.delete("/:id", deleteAlbum);
router.post("/image/:id", upload.single("postImage"), uploadPicture);

module.exports = router;
