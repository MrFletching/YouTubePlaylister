const express = require('express');
const router = express.Router();

const playlistsRouter = require('./playlistsRouter');

router.use('/playlists', playlistsRouter);

router.use((req, res) => {
    res.status(404).json({"error": "Not found"});
});

module.exports = router;