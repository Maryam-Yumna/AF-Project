const express = require('express')
const router = express.Router()
const KeynoteSpeakerTemp = require('../models/KeynoteSpeakerTemp')
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

//Insert a Keynote speaker temporarily
router.route("/").post(upload.single('photo') , (req,res) =>{
    const keynoteName = req.body.keynoteName;
    const organization = req.body.organization;
    const description = req.body.description;
    const status = req.body.status;
    const photo = req.body.photo;

    const newTempKeynote = new KeynoteSpeakerTemp();

    newTempKeynote.keynoteName = keynoteName;
    newTempKeynote.organization = organization;
    newTempKeynote.description = description;
    newTempKeynote.status = status;
    newTempKeynote.photo = photo;

    newTempKeynote.save().then(()=> {
        res.json("KeynoteSpeaker updates inserted into keynoteSpeakerTemp")
    }).catch((err)=>{
        console.log(err)
    });

})

//get temporary keynote speakers
router.route('/').get((req, res)=>{
    KeynoteSpeakerTemp.find().then((keynotespeaker)=>{
        res.json(keynotespeaker)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router
