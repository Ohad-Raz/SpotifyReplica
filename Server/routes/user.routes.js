const { User } = require("../models/user.model");
const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getUsers,
  getUserById,
  editUser,
  deleteUser,
  uploadPicture,
  searchUserByName,
} = require("../controllers/user.Controller");
const { auth } = require("../middlewares/auth");
const upload = require("../middlewares/upload");

router.post("/register", register);

router.post("/login", login);

router.get("/", getUsers);

router.patch("/:id", editUser);

router.delete("/:id", deleteUser);

router.get("/search/:name", searchUserByName);

router.get("/init-user", auth, async (req, res) => {
  const user = req.user;
  console.log(user);

  try {
    const dbUser = await User.findById(user.id);
    return res.send(dbUser);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
});

router.get("/:id", getUserById);

router.post("/image/:id", upload.single("postImage"), uploadPicture);

module.exports = router;
