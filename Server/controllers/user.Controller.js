const { User } = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const { genrateToken } = require("../utils/jwt");

const register = async (req, res) => {
  const body = await req.body;
  const hash = await bcryptjs.hash(body.password, 10);
  try {
    const user = new User({
      name: body.name,
      password: hash,
      email: body.email,
    });
    const userDuplicateEmail = await User.findOne({ email: body.email });

    if (userDuplicateEmail) {
      return res.send("already has account");
    } else {
      user.save();

      return res.send(user);
    }
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};
const login = async (req, res) => {
  try {
    const body = await req.body;
    const userFound = await User.findOne({
      email: body.email,
    });

    if (userFound) {
      const isMatch = await bcryptjs.compare(body.password, userFound.password);

      if (isMatch) {
        const token = genrateToken({
          id: userFound._id,
          email: userFound.email,
          role: "admin",
        });
        return res.send({ userFound, token });
      } else return res.status(401).send("email or password are incorrect");
    } else {
      return res.send("not such user please register");
    }
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.send(users);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ _id: id });
    if (user) {
      return res.send(user);
    } else {
      return res.send("no such user");
    }
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const editUser = async (req, res) => {
  try {
    const body = await req.body;
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, body);
    return res.send(user);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userRemoved = await User.findByIdAndDelete(id);
    return res.send(userRemoved);
  } catch (error) {
    console.log(error);
    res.send("something wrong");
  }
};
const uploadPicture = async (req, res) => {
  try {
    const data = await uploadToCloudinary(req.file.path, "post-images");
    await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          imageUrl: data.url,
          publicId: data.public_id,
        },
      }
    );
    res.status(200).send("user image uploaded with success!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const searchUserByName = async (req, res) => {
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
};
module.exports = {
  searchUserByName,
  register,
  login,
  getUsers,
  deleteUser,
  editUser,
  getUserById,
  uploadPicture,
};
