const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const conferenceSchema = new Schema({
    confName: {
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    startDate:{
        type: Date,
        required: true,
    },
    endDate:{
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true
    },
    attendeeRegistrationOpen: {
        type: Date,
        required:true
    },
    attendeeRegistrationClose: {
        type: Date,
        required:true
    },
    paperSubmissionOpen: {
        type: Date,
        required:true
    },
    paperSubmissionClose: {
        type: Date,
        required:true
    },
    workshopSubmissionOpen: {
        type: Date,
        required:true
    },
    workshopSubmissionClose: {
        type: Date,
        required:true
    },

});


const Conference = mongoose.model('Conference',conferenceSchema);
module.exports =Conference;