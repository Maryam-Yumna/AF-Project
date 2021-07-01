const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workshopSchema = new Schema({
    conference:[{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'conferences'}],
    year:{
        type: Number
    },
    topic: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    conductedBy: {
        type: String,
        required: true,
    },
    conductedOn:{
        type: String,
        required: true
    }
});

const Workshop = mongoose.model("Workshop", workshopSchema);

module.exports = Workshop;
