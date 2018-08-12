const express = require('express');
const router = express.Router();

const Video = require('../../models/Video');
const youtubeService = require('../../services/youtube');

router.get('/', (req, res, next) => {
    Video.find()
        .then((videos) => res.json(videos))
        .catch(next);
});

router.post('/', (req, res, next) => {
    const id = req.body.id;

    const newVideoData = youtubeService.getVideo(id);

    const newVideo = new Video(newVideoData);

    newVideo.save()
        .then((video) => res.json(video))
        .catch(next);
});

module.exports = router;