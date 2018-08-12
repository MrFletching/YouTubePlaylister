const express = require('express');
const router = express.Router();

const Playlist = require('../../models/Playlist');

router.get('/', (req, res, next) => {
    Playlist.find()
        .then((playlists) => res.json(playlists))
        .catch(next);
});

module.exports = router;