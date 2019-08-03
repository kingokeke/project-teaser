const express = require('express');
const { userRoute, productRoute } = require('./routes');

const app = express();

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen(3000, () => console.log('Server started'));

module.exports = app;
