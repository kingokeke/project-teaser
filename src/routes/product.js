const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'This is the route for products' });
});

module.exports = router;
