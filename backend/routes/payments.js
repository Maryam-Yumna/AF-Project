const router = require("express").Router();
const { request } = require("express");
const Payment = require("../models/Payment");
const auth = require('../middleware/auth');

router.route('/newPayment').post(auth, (req, res)=> {
    const user = req.body.user;
    const amount = req.body.amount;
    const paymentDate = req.body.paymentDate;
    const paymentType = req.body.paymentType;

    const payment = new Payment();

    payment.user = req.user.id;
    payment.amount = amount;
    payment.paymentDate = paymentDate;
    payment.paymentType = paymentType;
    

    payment.save().then(()=> {
            res.json("Payment Made")
        }).catch((err)=>{
            console.log(err)
    });
    
    
})


module.exports = router;