const utils = require("../helpers/utils");
const User = require("../models/user");

async function getUsers() {
  try {
    const users = await User.find().lean();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getSingleUser(userId) {
    try {
        const user = await User.findById(userId).lean();
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function deleteUser(userId) {
    try {
        const deletedUser = await User.findByIdAndDelete(userId).lean();
        return deletedUser;
    } catch (error) {
        throw new Error(error.message);
    }
}
const addUser = async (request, reply) => {
  try {
    const userBody = request.body;
    // validateUserBody(userBody);

    userBody.fullName = utils.getFullName(
      userBody.firstName,
      userBody.lastName
    ); // test getfull name
    delete userBody.firstName;
    delete userBody.lastName;
    const user = new User(userBody);
    const addedUser = await user.save();
    return addedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
// function validateUserBody(userBody) {
//     if (!userBody || !userBody.firstName || !userBody.lastName) {
//         throw new Error('Invalid user data');
//     }
// }
module.exports = {
  addUser,
  getUsers,
  getSingleUser,
  deleteUser,
//   validateUserBody
};

// getUsers
// getSingleUser
// deleteUser

// bonus : validation, updateUser
