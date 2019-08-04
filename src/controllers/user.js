// const { queryDatabase } = require('../database/query');
const { connection } = require('../database/connection');

exports.signUp = (req, res) => {
  const { firstName, lastName, email, phone, username, password } = req.body;

  const queryString =
    "INSERT INTO `project-teaser`.`users` (`first_name`, `last_name`, `email`, `phone`, `username`, `password`) VALUES ('" +
    firstName +
    "', '" +
    lastName +
    "', '" +
    email +
    "', '" +
    phone +
    "', '" +
    username +
    "', '" +
    password +
    "');";

  connection.query(queryString, function(err, results, fields) {
    if (err) res.json({ errors: err });
    res.json({ message: results });
  });
};

exports.login = (req, res) => {
  res.json({ message: `This is the route to login user ${req.params.id}` });
};

exports.update = (req, res) => {
  res.json({ message: `This is the route to update user ${req.params.id}` });
};

exports.delete = (req, res) => {
  res.json({ message: `This is the route to delete user ${req.params.id}` });
};
