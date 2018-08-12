const request = require('request');

const config = require('../config/config');

const rootURL = 'https://www.googleapis.com/youtube/v3'
const key = config.keys.youtubeKey;

function durationToSeconds(duration) {
    const matches = duration.match(/^P((\d+)D)?T((\d+)H)?((\d+)M)?((\d+)S)?$/i) || [];
    const days  = parseInt(matches[2], 10) || 0;
    const hours = parseInt(matches[4], 10) || 0;
    const mins  = parseInt(matches[6], 10) || 0;
    const secs  = parseInt(matches[8], 10) || 0;

    return days*60*60*24 + hours*60*60 + mins*60 + secs;
}

function getVideo(id) {
    const data = {key: key, part: 'id,snippet,contentDetails', id: id};

    request({url: `${rootURL}/videos`, qs: data, json: true}, (err, res, body) => {
        if(err) {
            console.error(err);
            throw new Error('Failed to get video');
        }

        const video = body.items[0];
        const snippet = video.snippet;
        const contentDetails = video.contentDetails;

        const duration = durationToSeconds(contentDetails.duration);

        return {
            id: video.id,
            title: snippet.title,
            channel: snippet.channelTitle,
            duration: duration
        }
    })
}

module.exports = {
    getVideo
};