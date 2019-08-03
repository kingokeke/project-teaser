exports.getAllUsers = (req, res) => {
  res.json({ message: 'This is the route to get all users' });
};

exports.signUp = (req, res) => {
  res.json(req.body);
};

exports.update = (req, res) => {
  res.json({ message: `This is the route for updating user ${req.params.id}` });
};
