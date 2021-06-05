const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const keynoteSpeakerTempSchema = new Schema({
    // conference: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Conference",
    // },
    keynoteSpeaker: {
        type: Schema.Types.ObjectId,
        ref: "KeynoteSpeaker",
        require: true
    },
    // year: {
    //     type: Number,
    // },
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

const KeynoteSpeakerTemp = mongoose.model("KeynoteSpeakerTemp", keynoteSpeakerTempSchema);

module.exports = KeynoteSpeakerTemp;
