const Conference = require('../models/conference.model');

//create conferece
const createConference = async (req, res) => {
    if (req.body) {
      const conference = new Conference(req.body);
      conference.save()
      .then(data => {
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }

  //get all conference details
  const getAllconferenceDetails= async (req, res) => {
    await Conference.find()
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  }

  //get one conference details
  const getOneconferenceDetails= async (req, res) => {
    let id = req.params.id;
    const item = await Conference.findById(id).then((item)=>{
        res.status(200).send(item)
    }).catch((err)=>{
        res.status(500).send({status: "Error with get item", error:err.message});
    })
}

//get conference details that approved by admin
const getApprovedconferenceDetails= async (req, res) => {
  await Conference.find({ status: /approved/ } )
  .then(data => {
    res.status(200).send({ data: data });
  })
  .catch(error => {
    res.status(500).send({ error: error.message });
  });
}

  // update coonference details
  const updateconferenceDetails= async (req, res) => {

    let confId = req.params.id // get as a parameter in url //fetch id
    const {  confName,
      year,
      startingDate,
      endDate,
      description,
      venue,
      RegistrationOpen,
      RegistrationClosed,
      paperSubmitionOpen,
      paperSubmitionClose,
      workshopSubmitionOpen,
      workshopSubmitionClose,
      status} = req.body;

    const updateItem = {
      confName,
      year,
      startingDate,
      endDate,
      description,
      venue,
      RegistrationOpen,
      RegistrationClosed,
      paperSubmitionOpen,
      paperSubmitionClose,
      workshopSubmitionOpen,
      workshopSubmitionClose,
      status,}
    //check the conference is exists

    const update = await Conference.findByIdAndUpdate(confId , updateItem ).
    then(()=>{
        res.status(200).send({status : "item updated" })
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status :"error with updating "}) })}

  
  //detele conferenceDetails
  const deleteconferenceDetails= async (req, res) => {

    let confId = req.params.id;
    await Conference.findByIdAndDelete(confId).then(()=>{
        res.status(200).send({status:"item deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status :"error with deleting"})
 })
  }




  module.exports = {
    createConference,
    getAllconferenceDetails,
    updateconferenceDetails,
    deleteconferenceDetails,
    getOneconferenceDetails,
    getApprovedconferenceDetails

  };