const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for sound-post
const SoundSchema = new Schema({
    id: Schema.Types.ObjectID,
    title: String,
    date: Date,
    owner: String,
    filename: String,
    category: String,
    description: String,
    likes: Number
})

//create model for sound-post
const Sound = mongoose.model('sound', SoundSchema);

module.exports = Sound;
