const router = require("express").Router();
const { request } = require("express");
const KeynoteSpeaker= require("../models/KeynoteSpeaker");
const KeynoteSpeakerTemp = require('../models/KeynoteSpeakerTemp')

router.route('/newKeynoteSpeaker').post((req, res)=> {
    const conference = req.body.conference;
    const year = req.body.year;
    const name = req.body.name;
    const description = req.body.description;
    const organization = req.body.organization;
    
    const newKeynoteSpeaker = new KeynoteSpeaker();

    newKeynoteSpeaker.conference = conference;
    newKeynoteSpeaker.year = year;
    newKeynoteSpeaker.name = name;
    newKeynoteSpeaker.description = description;
    newKeynoteSpeaker.organization = organization;
    

    newKeynoteSpeaker.save().then(()=> {
            res.json("KeynoteSpeaker inserted")
        }).catch((err)=>{
            console.log(err)
    });
    
    
})

router.route('/').get((req, res)=>{
    KeynoteSpeaker.find().then((keynoteSpeaker)=>{
        res.json(keynoteSpeaker)
    }).catch((err)=>{
        console.log(err)
    })
})

//get a KeynoteSpeaker by the id
router.route('/findById/:id').get(async(req, res)=>{
    let id = req.params.id;
    KeynoteSpeaker.findById(id).populate('conference').then((keynoteSpeaker)=>{
        res.status(200).send({keynoteSpeaker: keynoteSpeaker})
    }).catch((err)=>{
        res.status(500).send({status: "Error with get keynoteSpeaker", error:err.message});
    })
})
//get workshops of a year
router.route('/findByYear/:year').get(async(req, res)=>{
    let year = req.params.year;
    KeynoteSpeaker.find({year: year}).populate('conference').then((keynoteSpeaker)=>{
        res.status(200).send({keynoteSpeaker: keynoteSpeaker})
    }).catch((err)=>{
        res.status(500).send({status: "Error with get keynoteSpeaker", error:err.message});
    })
})


//Insert accepted keynote speaker
router.route("/").post((req,res) =>{
    const keynoteName = req.body.keynoteName;
    const organization = req.body.organization;
    const description = req.body.description;
    const status = req.body.status;

    const KeySpeaker = new KeynoteSpeaker();

    KeySpeaker.keynoteName = keynoteName;
    KeySpeaker.organization = organization;
    KeySpeaker.description = description;
    KeySpeaker.status = status;

    KeySpeaker.save().then(()=> {
        res.json("KeynoteSpeaker updates inserted into keynoteSpeakerTemp")
    }).catch((err)=>{
        console.log(err)
    });

})


//get accepted keynote speakers
router.route("/accepted").get((req, res)=>{
    KeynoteSpeaker.find().then((acceptedSpeaker)=>{
        res.json(acceptedSpeaker)
    }).catch((err)=>{
        console.log(err)
    })
})


//get the keynote by the id
router.route("/:id").get((req, res)=>{
    KeynoteSpeakerTemp.findById(req.params.id).then((oneKeySpeaker)=>{
        res.json(oneKeySpeaker)
    }).catch((err)=>{
        console.log(err)
    })
})
module.exports = router;