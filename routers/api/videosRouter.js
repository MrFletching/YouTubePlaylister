const express = require('express');
const router = express.Router();

const Video = require('../../models/Video');
const youtubeService = require('../../services/youtube');

// Get all videos
router.get('/', (req, res, next) => {
    Video.find()
        .then((videos) => res.json(videos))
        .catch(next);
});

// Add a video
router.post('/', (req, res, next) => {
    const id = req.body.id;

    youtubeService.getVideo(id)
        .then((newVideoData) => {
            const newVideo = new Video(newVideoData);
            return newVideo.save();
        })
        .then((video) => res.json(video))
        .catch(next);
});

module.exports = router;