const router = require("express").Router();
const { request } = require("express");
const Workshop = require("../models/Workshop");

router.route('/newWorkshop').post((req, res)=> {
    const conference = req.body.conference;
    const year = req.body.year;
    const topic = req.body.topic;
    const description = req.body.description;
    const conductedBy = req.body.conductedBy;
    const conductedOn = req.body.conductedOn;

    const newWorkshop = new Workshop();

    newWorkshop.conference = conference;
    newWorkshop.year = year;
    newWorkshop.topic = topic;
    newWorkshop.description = description;
    newWorkshop.conductedBy = conductedBy;
    newWorkshop.conductedOn = conductedOn;
    

    newWorkshop.save().then(()=> {
            res.json("Workshop inserted")
        }).catch((err)=>{
            console.log(err)
    });
    
    
})

router.route('/').get((req, res)=>{
  
    Workshop.find({ }).populate('conferences' ,'confName year startingDate endDate description venue RegistrationOpen RegistrationClosed paperSubmitionOpen paperSubmitionClose workshopSubmitionOpen workshopSubmitionClose').then((workshops)=>{
        res.json(workshops)
    }).catch((err)=>{
        console.log(err)
    })
})

//get a Workshop by the id
router.route('/findById/:id').get(async(req, res)=>{
    let id = req.params.id;
    Workshop.findById(id).populate('conference').then((workshop)=>{
        res.status(200).send({workshop: workshop})
    }).catch((err)=>{
        res.status(500).send({status: "Error with get workshop", error:err.message});
    })
})
//get workshops of a year
router.route('/findByYear/:year').get(async(req, res)=>{
    let year = req.params.year;
    Workshop.find({year: year}).populate('conference').then((workshop)=>{
        res.status(200).send({workshop: workshop})
    }).catch((err)=>{
        res.status(500).send({status: "Error with get workshop", error:err.message});
    })
})
module.exports = router;