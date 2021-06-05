const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const keynoteSpeakerSchema = new Schema({
    conference: {
        type: Schema.Types.ObjectId,
        ref: "Conference",
    },
    year: {
        type: Number,
    },
    name: {
        type: String,
    },
    organization: {
        type: String,
    },
    description: {
        type: String,
    },
});

const KeynoteSpeaker = mongoose.model("KeynoteSpeaker", keynoteSpeakerSchema);

module.exports = KeynoteSpeaker;
