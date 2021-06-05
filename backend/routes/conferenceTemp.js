const router = require("express").Router();
const { request } = require("express");
const ConferenceTemp = require("../models/ConferenceTemp");


router.route('/newConferenceTemp').post((req, res)=> {
    
    const confId = req.body.confId;
    const confName = req.body.confName;
    const year = req.body.year;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const description = req.body.description;
    const venue = req.body.venue;
    const attendeeRegistrationOpen = req.body.attendeeRegistrationOpen;
    const attendeeRegistrationClose = req.body.attendeeRegistrationClose;
    const paperSubmissionOpen = req.body.paperSubmissionOpen;
    const paperSubmissionClose = req.body.paperSubmissionClose;
    const workshopSubmissionOpen = req.body.workshopSubmissionOpen;
    const workshopSubmissionClose = req.body.workshopSubmissionClose;

    const newConferenceTemp = new ConferenceTemp();

    newConferenceTemp.confId = confId;
    newConferenceTemp.confName = confName;
    newConferenceTemp.year = year;
    newConferenceTemp.startDate = startDate;
    newConferenceTemp.endDate = endDate;
    newConferenceTemp.description = description;
    newConferenceTemp.venue = venue;
    newConferenceTemp.attendeeRegistrationOpen = attendeeRegistrationOpen;
    newConferenceTemp.attendeeRegistrationClose = attendeeRegistrationClose;
    newConferenceTemp.paperSubmissionOpen = paperSubmissionOpen;
    newConferenceTemp.paperSubmissionClose = paperSubmissionClose;
    newConferenceTemp.workshopSubmissionOpen = workshopSubmissionOpen;
    newConferenceTemp.workshopSubmissionClose = workshopSubmissionClose;

    newConferenceTemp.save().then(()=> {
            res.json("conference updates added to conference temp")
        }).catch((err)=>{
            console.log(err)
    })
    
})

router.route('/').get((req, res)=>{
    ConferenceTemp.find().then((conferences)=>{
        res.json(conferences)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;