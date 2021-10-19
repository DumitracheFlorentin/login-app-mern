import users from "../config/db.js";

// Desc:   GET ALL USERS
// Type:   Public
const getUsers = (req, res) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Desc:   GET SPECIFIC USER
// Type:   Public
const getSpecificUser = (req, res) => {
  try {
    const id = req.params.id;

    if (users.some((user) => user._id === parseInt(id))) {
      res.status(200).json(users.filter((user) => user._id === parseInt(id)));
    } else {
      res
        .status(404)
        .json({ message: `The user with id: ${id} was not found!` });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Desc:   UPDATE SPECIFIC USER
// Type:   Private
const updateUser = (req, res) => {
  try {
    const id = req.params.id;

    if (users.some((user) => user._id === parseInt(id))) {
      const info = req.body;

      users.forEach((user) => {
        if (user._id === parseInt(id)) {
          user.username = info.username ? info.username : user.username;
          user.password = info.password ? info.password : user.password;
          user.email = info.email ? info.email : user.email;
        }
      });

      res.status(200).json({ message: `The user with id: ${id} was updated!` });
    } else {
      res
        .status(404)
        .json({ message: `The user with id: ${id} was not found!` });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Desc:   DELETE SPECIFIC USER
// Type:   Private
const deleteUser = (req, res) => {
  try {
    const id = req.params.id;

    if (users.some((user) => user._id === parseInt(id))) {
      let indeX;
      users.forEach((user, index) => {
        if (user._id === parseInt(id)) {
          indeX = index;
        }
      });

      users.splice(indeX, 1);

      res.status(200).json({ message: `The user with id: ${id} was deleted!` });
    } else {
      res
        .status(404)
        .json({ message: `The user with id: ${id} was not found!` });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Desc:   ADD NEW USER
// Type:   Public
const addUser = (req, res) => {
  try {
    const lastUser = users[users.length - 1];

    const { username, password, email } = req.body;

    if (username && password && email) {
      if (!users.some((user) => user.email === email)) {
        let newUser = {
          _id: lastUser._id + 1,
          username,
          password,
          email,
        };

        users.push(newUser);
      } else {
        res.json({ message: "The email is already taken!" });
      }
    } else {
      res.json({ message: "You must complete all fields!" });
    }

    res.status(200).json({ message: `The user was added!` });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export { getUsers, getSpecificUser, updateUser, deleteUser, addUser };
