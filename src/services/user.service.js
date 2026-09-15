const userRepository = require('../repositories/user.repository');

async function createUser(userData) {
  const { name, email, role } = userData;

  const userId = await userRepository.createUser(
    name,
    email,
    role
  );

  return userId;
}

module.exports = {
  createUser
};