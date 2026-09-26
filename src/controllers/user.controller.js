const service = require('../services/user.service');

const createUser = async (req, res) => {
  try {
    const user = await service.createUser(req.body);

    res.status(201).json({
      message: 'User created successfully',
      data: user
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to create user',
      error: error.message
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await service.getAllUsers();

    res.status(200).json({
      data: users
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch users',
      error: error.message
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await service.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.status(200).json({
      data: user
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch user',
      error: error.message
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await service.updateUser(
      req.params.id,
      req.body
    );

    res.status(200).json({
      message: 'User updated successfully',
      data: user
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to update user',
      error: error.message
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await service.deleteUser(req.params.id);

    res.status(200).json({
      message: 'User deleted successfully'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to delete user',
      error: error.message
    });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};