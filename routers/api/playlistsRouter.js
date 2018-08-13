const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Playlist = require('../../models/Playlist');
const Video = require('../../models/Video');
const youtubeService = require('../../services/youtube');

// Get all playlists
router.get('/', (req, res, next) => {
    Playlist.find({}, {videos:0})
        .then((playlists) => res.json(playlists))
        .catch(next);
});

// Get a single playlist
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    Playlist
        .aggregate([
            {$match: {_id: mongoose.Types.ObjectId(id)}},
            {$lookup: {
                from: 'videos',
                localField: 'videos.video',
                foreignField: '_id',
                as: 'videoData'
            }}
        ])
        .then((playlists) => {
            const playlist = playlists[0];
            
            // Match video ID to video data
            playlist.videos = playlist.videos.map((playlistVideo) => {
                let find = playlist.videoData.find((videoItem) => {
                    return videoItem._id.equals(playlistVideo.video);
                });
                return find;
            });

            delete playlist.videoData;

            res.json(playlist);
        })
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

// Add a video the a playlist
router.post('/:id/videos', (req, res, next) => {
    const playlistID = req.params.id;
    const videoID = req.body.id;

    // First check if the video is already stored
    Video.findOne({id: videoID})
        .then((video) => {
            if(video === null) {
                // Get video data if it was not found
                return youtubeService.getVideo(videoID)
                    .then((newVideoData) => {
                        const newVideo = new Video(newVideoData);
                        return newVideo.save();
                    });
            } else {
                return video;
            }
        })
        .then((video) => {
            // Now add video to playlist
            return Playlist.update({_id: playlistID}, {$push: {videos: { video: video._id }}})
                .then((playlist) => video);
        })
        .then((video) => res.json(video))
        .catch(next);
});

module.exports = router;