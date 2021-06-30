//when admin accept it will be inserted into the original table
//when admmin reject it will be updated the status as rejected
const express = require('express')
const router = express.Router()
const app = express();
const KeynoteSpeakerTemp = require('../models/KeynoteSpeakerTemp')
const KeynoteSpeaker = require('../models/KeynoteSpeaker')

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

//Insert accepted keynote speaker
router.route("/").post(upload.single('photo') , (req,res) =>{
    const keynoteName = req.body.keynoteName;
    const organization = req.body.organization;
    const description = req.body.description;
    const status = req.body.status;
    const photo = req.body.photo;

    const KeySpeaker = new KeynoteSpeaker();

    KeySpeaker.keynoteName = keynoteName;
    KeySpeaker.organization = organization;
    KeySpeaker.description = description;
    KeySpeaker.status = status;
    KeySpeaker.photo = photo;

    KeySpeaker.save().then(()=> {
        res.json("KeynoteSpeaker updates inserted into keynoteSpeakerTemp")
    }).catch((err)=>{
        console.log(err)
    });

})

//get temporary keynote speakers
router.route("/").get((req, res)=>{
    KeynoteSpeakerTemp.find().then((tempSpeaker)=>{
        res.json(tempSpeaker)
    }).catch((err)=>{
        console.log(err)
    })
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

//update keynote
app.put("/:id", (req, res) => {
    const updatedItem = {
        keynoteName: req.body.keynoteName,
        organization: req.body.organization,
        description: req.body.description,
        status: "Reject",
    };

    KeynoteSpeakerTemp.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: updatedItem },
        (req, res, err) => {
            if (!err) {
                console.log("Keynote Speaker is updated");
            } else {
                console.log(err);
            }
        }
    );
});



module.exports = router