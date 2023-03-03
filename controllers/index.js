const { User, Item } = require("../models");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json({ user });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: { model: Item, as: "wishlist" },
    });
    return res.status(200).json({ users });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findByPk(id, {
      include: { model: Item, as: "wishlist" },
    });
    return res.status(201).json({ user });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findByPk(id);
    const updatedUser = await user.update(req.body);
    return res.status(201).json({ updatedUser });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findByPk(id);
    const deletedUser = await user.destroy();
    return res.status(200).json({ deletedUser });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
