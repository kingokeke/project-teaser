const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Project Teaser API' });
});

app.listen(3000, () => console.log('Server started'));
