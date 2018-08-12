const express = require('express');
const router = express.Router();

const playlistsRouter = require('./playlistsRouter');
const videosRouter = require('./videosRouter');

router.use('/playlists', playlistsRouter);
router.use('/videos', videosRouter);

router.use((req, res) => {
    res.status(404).json({error: "Not found"});
});

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({error: "Internal error"});
});

module.exports = router;