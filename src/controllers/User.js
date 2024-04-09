const User = require("../models/User");

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "fetched Successfully",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Failed !!",
      message: error,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.body;
    console.log(req.body);
    await User.create({ firstName, lastName, email, phone });
    res.status(200).json({
      message: "User created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create User !!",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phone } = req.body;
    await User.findByIdAndUpdate(id, { firstName, lastName, email, phone });
    res.status(200).json({
      message: "Updated Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      status: "Updation Failed !!",
      message: error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({
      status: "Deleted Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      status: "Deletion Failed !!",
      message: error,
    });
  }
};

module.exports = { getUser, createUser, updateUser, deleteUser };
