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
        .findById(id)
        .populate('videos.video')
        .then((playlist) => res.json(playlist))
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

// Delete a video from a playlist
router.delete('/:id/videos/:videoID', (req, res, next) => {
    const playlistID = req.params.id;
    const videoID = req.params.videoID;

    Playlist.update({_id: playlistID}, {$pull: {videos: {_id: videoID}}})
        .then((result) => res.json(result))
        .catch(next);
});

// Delete a playlist
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    
    Playlist.findByIdAndRemove(id)
        .then(() => res.json({success: true}))
        .catch(next);
});

module.exports = router;