const express = require('express');
const router = express.Router();

const playlistsRouter = require('./playlistsRouter');
const videosRouter = require('./videosRouter');

// Use routers
router.use('/playlists', playlistsRouter);
router.use('/videos', videosRouter);

// JSON 404 Not Found error if no routes match
router.use((req, res) => {
    res.status(404).json({error: "Not found"});
});

// Catch internal errors
router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({error: "Internal error"});
});

module.exports = router;