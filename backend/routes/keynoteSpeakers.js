const router = require("express").Router();
const { request } = require("express");
const KeynoteSpeaker= require("../models/KeynoteSpeaker");


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
module.exports = router;