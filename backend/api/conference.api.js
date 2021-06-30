const express = require('express');
const router = express.Router();
const controller = require('../controller/conference.controller');




  router.post('/create', controller.createConference);
  router.get('/', controller.getAllconferenceDetails); 
  router.put('/update/:id', controller.updateconferenceDetails);
  router.delete('/delete/:id', controller.deleteconferenceDetails);
  router.get('/findbyId/:id', controller.getOneconferenceDetails);
  

  module.exports = router