const router = require("express").Router();
const { request } = require("express");
const Payment = require("../models/Payment");
const auth = require('../middleware/auth');

router.route('/newPayment').post(auth, (req, res)=> {

    const payment = new Payment();

    payment.user = req.user.id;
    payment.amount = req.body.amount;
    payment.firstName = req.body.firstName;
    payment.lastName =  req.body.lastName;
    payment.cvc = req.body.cvc;
    payment.cardExpDate = req.body.cardExpDate;
    payment.cardNumber = req.body.cardNumber;
    payment.paymentDate = req.body.paymentDate;
    payment.paymentType = req.body.paymentType;

    payment.save().then(()=> {
            res.json("Payment Made")
        }).catch((err)=>{
            console.log(err)
    });
    
    
})
router.route('/hasPaid').get(auth, (req, res)=>{
    const uid = req.user.id;
    Payment.findOne({user : uid}).populate('user').then((payment)=>{
        if(!payment){
            return res.send({
                hasPaid: false
            })
        }else{
            return res.send({
                hasPaid: true
            })
        }
    }).catch((err)=>{
        console.log(err)
    })
   
})

module.exports = router;