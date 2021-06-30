const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const keynoteSpeakerSchema = new Schema({
    /*conference: {
        type: Schema.Types.ObjectId,
        ref: "Conference",
    },*/

    photo: {
        type: String,
        //required: true
    },

    keynoteName: {
        type: String,
        required: true
    },
    organization: {
        type: String,
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

const KeynoteSpeaker = mongoose.model("KeynoteSpeaker", keynoteSpeakerSchema);

module.exports = KeynoteSpeaker;
