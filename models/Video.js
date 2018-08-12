const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    channel: {type: String, required: true},
    duration: {type: Number, required: true},
    publishedAt: {type: Date, required: true}
});

module.exports = mongoose.model('video', VideoSchema);


