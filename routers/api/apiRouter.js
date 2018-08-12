const express = require('express');
const router = express.Router();

const playlistsRouter = require('./playlistsRouter');

router.use('/playlists', playlistsRouter);

module.exports = router;