const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workshopSchema = new Schema({
    conference:{
        type: Schema.Types.ObjectId, ref: 'Conference', 
    },
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
    conductedBy: [
        {
            name: {
                type: String,
                required: true
            },
            organization: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true,
            },
        },
    ],
    conductedOn:{
        type: Date,
        required: true
    }
});

const Workshop = mongoose.model("Workshop", workshopSchema);

module.exports = Workshop;
