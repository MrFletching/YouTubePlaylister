const axios = require('axios');

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
    console.log(`Getting video data for ID: ${id}`);

    const params = {
        key: key,
        part: 'id,snippet,contentDetails',
        id: id
    };

    return axios.get(`${rootURL}/videos`, {params})
        .then((res) => {
            const video = res.data.items[0];
            const snippet = video.snippet;
            const contentDetails = video.contentDetails;

            const duration = durationToSeconds(contentDetails.duration);
    
            return {
                id: video.id,
                title: snippet.title,
                channel: snippet.channelTitle,
                duration: duration,
                publishedAt: new Date(snippet.publishedAt)
            };
        });
}

module.exports = {
    getVideo
};