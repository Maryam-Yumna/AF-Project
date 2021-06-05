const router = require("express").Router();
const { request } = require("express");
let Conference = require('../models/Conference');


router.route('/newConference').post((req, res)=> {
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

    const newConference = new Conference();

    newConference.confName = confName;
    newConference.year = year;
    newConference.startDate = startDate;
    newConference.endDate = endDate;
    newConference.description = description;
    newConference.venue = venue;
    newConference.attendeeRegistrationOpen = attendeeRegistrationOpen;
    newConference.attendeeRegistrationClose = attendeeRegistrationClose;
    newConference.paperSubmissionOpen = paperSubmissionOpen;
    newConference.paperSubmissionClose = paperSubmissionClose;
    newConference.workshopSubmissionOpen = workshopSubmissionOpen;
    newConference.workshopSubmissionClose = workshopSubmissionClose;

    newConference.save().then(()=> {
            res.json("Conference created")
        }).catch((err)=>{
            console.log(err)
    })
    
})

router.route('/').get((req, res)=>{
    Conference.find().then((conferences)=>{
        res.json(conferences)
    }).catch((err)=>{
        console.log(err)
    })
})

//get a Conference by the id
router.route('/findById/:id').get(async(req, res)=>{
    let id = req.params.id;
    Conference.findById(id).then((conference)=>{
        res.status(200).send({conference: conference})
    }).catch((err)=>{
        res.status(500).send({status: "Error with get conference", error:err.message});
    })
})
//get a Conference by the year
router.route('/findByYear/:year').get(async(req, res)=>{
    let year = req.params.year;
    Conference.find({year: year}).then((conference)=>{
        res.status(200).send({conference: conference})
    }).catch((err)=>{
        res.status(500).send({status: "Error with get conference", error:err.message});
    })
})
module.exports = router;