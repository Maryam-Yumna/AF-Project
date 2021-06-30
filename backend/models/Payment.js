const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const paymentSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true 
    },
    lastName: {
        type: String,
        required: true 
    },
    cardNumber: {
        type: String,
        required: true 
    },
    cvc: {
        type: Number,
        required: true
    },
    cardExpDate:{
        type: Date,
        required: true
    },
    paymentDate:{
        type: Date,
        default: Date.now(),
    },
    paymentType: {
        type: String,
        required: true 
    },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
