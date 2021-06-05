const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const conferenceTempSchema = new Schema({
    confId:{
        type: Schema.Types.ObjectId, 
        ref: 'Conference',
        required: true 
    },
    confName: {
        type: String,
        
    },
    year:{
        type: String,
    },
    startDate:{
        type: Date,
    },
    endDate:{
        type: Date,
    },
    description: {
        type: String,
    },
    venue: {
        type: String,
    },
    attendeeRegistrationOpen: {
        type: Date,
    },
    attendeeRegistrationClose: {
        type: Date,
    },
    paperSubmissionOpen: {
        type: Date,
    },
    paperSubmissionClose: {
        type: Date,
    },
    workshopSubmissionOpen: {
        type: Date,
    },
    workshopSubmissionClose: {
        type: Date,
    }
});


const ConferenceTemp = mongoose.model('conferenceTemp',conferenceTempSchema);

module.exports =ConferenceTemp;