const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.listUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    if (!users) {
      return res.status(404).json({
        message: "No users found",
      });
    }

    res.status(200).json({
      message: "Fetched user successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Fetched user successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

exports.searchUsers = async (req, res) => {
  try {
    const { keyword } = req.params;

    const users = await User.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            id: `%${keyword}%`,
          },
        ],
      },
    });

    if (!users) {
      return res.status(404).json({
        message: "No users found",
      });
    }

    res.status(200).json({
      message: "Fetched users successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password: inputPassword, role } = req.body;
    //validations
    if (!name || !email || !inputPassword || !role) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    //hase password
    const hashedPassword = await bcrypt.hash(inputPassword, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const { password, ...rest } = user;

    res.status(201).json({
      message: "User created successfully",
      user: rest,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

exports.deleteUser = async () => {};
