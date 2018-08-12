const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
    name: {type: String, required: true},
    videos: [{
        video: {type: Schema.Types.ObjectId, ref: 'video'},
        addedAt: {type: Date, required: true}
    }]
});

module.exports = mongoose.model('playlist', PlaylistSchema);