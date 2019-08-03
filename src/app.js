const express = require('express');
const { userRoute, productRoute } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server started. API accessible at http://localhost:${PORT}/api/`)
);

module.exports = app;
