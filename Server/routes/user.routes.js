const { User } = require("../models/user.model");
const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/auth");
const upload = require("../middlewares/upload");

router.post("/register", register);

router.post("/login", login);

router.get("/", getUsers);

router.patch("/:id", editUser);

router.delete("/:id", deleteUser);

router.get("/search/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const users = await User.find({
      name: { $regex: name, $options: "im" },
    }).limit(10);
    return res.send(users);
  } catch (error) {
    console.log(error);
    res.send("something wrong or not user found");
  }
});

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
