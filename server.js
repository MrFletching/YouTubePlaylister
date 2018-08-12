const express = require('express');
const mongoose = require('mongoose');

const config = require('./config/config');
const apiRouter = require('./routers/api/apiRouter');

const app = express();

mongoose
    .connect(config.keys.mongoURI, {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(err));

// Use Routers
app.use('/api', apiRouter);


const { port } = config;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});