const router = require("express").Router();
const { request } = require("express");
const KeynoteSpeakerTemp = require("../models/KeynoteSpeakerTemp");


router.route('/newKeynoteSpeakerTemp').post((req, res)=> {

    const keynoteSpeaker = req.body.keynoteSpeaker;
    const name = req.body.name;
    const description = req.body.description;
    const organization = req.body.organization;
    
    const newKeynoteSpeakerTemp = new KeynoteSpeakerTemp();

    newKeynoteSpeakerTemp.keynoteSpeaker = keynoteSpeaker;
    newKeynoteSpeakerTemp.name = name;
    newKeynoteSpeakerTemp.description = description;
    newKeynoteSpeakerTemp.organization = organization;
    

    newKeynoteSpeakerTemp.save().then(()=> {
            res.json("KeynoteSpeaker updates inserted into keynoteSpeakerTemp")
        }).catch((err)=>{
            console.log(err)
    });
    
    
})

router.route('/').get((req, res)=>{
    KeynoteSpeakerTemp.find().then((keynotespeaker)=>{
        res.json(keynotespeaker)
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports = router;