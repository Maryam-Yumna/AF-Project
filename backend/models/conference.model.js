const mongoose = require('mongoose');

const ConferenceSchema = new mongoose.Schema({
  confName: { type: String, required: false, trim: true },
   year: { type: String, required: false, trim: true },
   startingDate: { type: String, required: false, trim: true },
   endDate: { type: String, required: false, trim: true },
   description: { type: String, required: false, trim: true },
  venue: { type: String, required: false, trim: true },
  RegistrationOpen: { type: String, required: false, trim: true },
   RegistrationClosed: { type: String, required: false, trim: true },
   paperSubmitionOpen: { type: String,required: false, trim: true },
  paperSubmitionClose: { type: String, required: false, trim: true },
  workshopSubmitionOpen: { type: String, required: false, trim: true },
   workshopSubmitionClose: { type: String, required: false, trim: true },
  status: { type: String, required: false, trim: true },
  });

const conference = mongoose.model('conference', ConferenceSchema);
module.exports = conference;