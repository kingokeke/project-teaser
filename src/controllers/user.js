// const { queryDatabase } = require('../database/query');
const { connection } = require('../database/connection');

exports.signUp = (req, res) => {
  connection.query('SHOW DATABASES', async function(err, results, fields) {
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
