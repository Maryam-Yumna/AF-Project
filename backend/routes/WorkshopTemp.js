const router = require("express").Router();
const WorkshopTemp = require("../models/WorkshopTemp");

router.route('/newWorkshopTemp').post((req, res)=> {
    const workshop = req.body.workshop;
    const topic = req.body.topic;
    const description = req.body.description;
    const conductedBy = req.body.conductedBy;
    const conductedOn = req.body.conductedOn;

    const newWorkshopTemp = new WorkshopTemp();

    newWorkshopTemp.workshop = workshop;
    newWorkshopTemp.topic = topic;
    newWorkshopTemp.description = description;
    newWorkshopTemp.conductedBy = conductedBy;
    newWorkshopTemp.conductedOn = conductedOn;
    

    newWorkshopTemp.save().then(()=> {
            res.json("Workshop updates inserted into wrokshoptemp")
        }).catch((err)=>{
            console.log(err)
    });
    
    
})

router.route('/').get((req, res)=>{
    WorkshopTemp.find().then((workshops)=>{
        res.json(workshops)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;