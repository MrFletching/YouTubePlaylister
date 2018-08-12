const express = require('express');
const router = express.Router();

const Video = require('../../models/Video');

router.get('/', (req, res, next) => {
    Video.find()
        .then((videos) => res.json(videos))
        .catch(next);
});

router.post('/', (req, res, next) => {
    console.log(req.body.id);
    res.json({success: true});
});

module.exports = router;