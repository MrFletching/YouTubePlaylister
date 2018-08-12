const express = require('express');
const router = express.Router();

const playlistsRouter = require('./playlistsRouter');

router.get('/', (req, res) => {
    res.json('This is the playlists route');
});

module.exports = router;