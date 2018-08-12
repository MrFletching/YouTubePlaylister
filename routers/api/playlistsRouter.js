const express = require('express');
const router = express.Router();

const Playlist = require('../../models/Playlist');

// Get all playlists
router.get('/', (req, res, next) => {
    Playlist.find()
        .then((playlists) => res.json(playlists))
        .catch(next);
});

// Create a playlist
router.post('/', (req, res, next) => {
    const name = req.body.name;

    const newPlaylist = new Playlist({
        name: name,
        videos: []
    });

    newPlaylist.save()
        .then((playlist) => res.json(playlist))
        .catch(next);
});

module.exports = router;