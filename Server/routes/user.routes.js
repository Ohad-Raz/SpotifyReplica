const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.Controller");
const { auth } = require("../middlewares/auth");
const upload = require("../middlewares/upload");

router.post("/login", userController.login);
router.post("/register", userController.register);

router.use(auth);

router
  .route("/")
  .get(userController.restrictTo("admin"), userController.getUsers);

router
  .route("/:id")
  .patch(userController.editUser)
  .delete(userController.deleteUser)
  .get(userController.getUserById);

router.get("/search/:name", userController.searchUserByName);

router.get("/user", userController.getUserByToken);

router.get("/init-user", async (req, res) => {
  try {
    const dbUser = await req.user;
    return res.send(dbUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post(
  "/image/:id",
  upload.single("postImage"),
  userController.uploadPicture
);

module.exports = router;
