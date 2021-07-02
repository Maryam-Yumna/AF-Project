const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const keynoteSpeakerTempSchema = new Schema({
    keynoteSpeaker: {
        type: Schema.Types.ObjectId,
        ref: "KeynoteSpeaker",
        require: true
    },
    keynoteName: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default : "Waiting"
    }
});

const KeynoteSpeakerTemp = mongoose.model("KeynoteSpeakerTemp", keynoteSpeakerTempSchema);

module.exports = KeynoteSpeakerTemp;
