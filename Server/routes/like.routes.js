const { Router } = require("express");
const { getUserLikes, addUserLike, removeUserLike } = require("../controllers/likeController");
const router = Router();

router.get("/:id", getUserLikes);
router.post("/:id", addUserLike);
router.delete("/:id", removeUserLike);

module.exports = router;