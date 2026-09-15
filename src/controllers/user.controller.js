const userService = require('../services/user.service');

async function createUser(req, res, next) {
  try {
    const { name, email, role } = req.body;

    const userId = await userService.createUser({
      name,
      email,
      role
    });

    res.status(201).json({
      id: userId,
      message: 'User created successfully'
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createUser
};