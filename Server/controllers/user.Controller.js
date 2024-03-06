const { User } = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { genrateToken } = require("../utils/jwt");
const { uploadToCloudinary } = require("../cloudiniryFloder/cloudinary");

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
    const token = genrateToken({
      id: user._id,
      email: user.email,
      role: user.role,
    });

    if (userDuplicateEmail) {
      return res.send("already has account");
    } else {
      user.save();

      return res.send({ user, token });
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
          role: userFound.role,
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

const getUserByToken = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return user data
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    console.error("Error retrieving user:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

const uploadPicture = async (req, res) => {
  console.log("heloo");
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
  getUserByToken,
};
