const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config/config');
const apiRouter = require('./routers/api/apiRouter');

// Connect to MongoDB
mongoose
    .connect(config.keys.mongoURI, {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(err));



const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Use Routers
app.use('/api', apiRouter);


const { port } = config;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});