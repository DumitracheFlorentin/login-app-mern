import asyncHandler from "express-async-handler";
import User from "../models/usersModel.js";

// @Desc    GET ALL USERS
// @Route   /api/users
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  res.json(users);
});

// @Desc    GET SPECIFIC USER
// @Route   /api/users/:id
const getSpecificUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  res.json(user);
});

// @Desc    UPDATE SPECIFIC USER
// @Route   /api/users/:id
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    const { username, password, email } = req.body;

    user.username = username ? username : user.username;
    user.password = password ? password : user.password;
    user.email = email ? email : user.email;

    const updatedUser = await user.save();

    res.json(updatedUser);
  } else {
    res.json({ message: "The user does not exist!" });
  }
});

// @Desc    DELETE SPECIFIC USER
// @Route   /api/users/:id
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "The user was removed!" });
  } else {
    res.json({ message: "The user does not exist!" });
  }
});

// @Desc    ADD NEW USER
// @Route   /api/users
const addUser = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;

  const userExists = await User.findOne({ email });

  if (!userExists) {
    if (username && password && email) {
      const newUser = await User.create({
        username,
        password,
        email,
      });

      res.json(newUser);
    }
  } else {
    res.json({ message: "The email is already taken!" });
  }
});

// @Desc    LOGIN USER
// @Route   /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const userExists = await User.findOne({ username });

  if (userExists) {
    if (userExists.password === password) {
      res.json(userExists);
    } else {
      res.json({ message: "The password is not correct!" });
    }
  } else {
    res.json({ message: "The username does not exist!" });
  }
});

export {
  getUsers,
  getSpecificUser,
  updateUser,
  deleteUser,
  addUser,
  loginUser,
};
