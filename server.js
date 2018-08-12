const express = require('express');

const apiRouter = require('./routers/api/apiRouter');

const app = express();

const port = process.env.PORT || 3000;

// Use Routers
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});