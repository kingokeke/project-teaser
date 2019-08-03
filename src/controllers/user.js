const getAllUsers = (req, res) => {
  res.send({ message: 'This is the route to get all users' });
};

module.exports.getAllUsers = getAllUsers;
