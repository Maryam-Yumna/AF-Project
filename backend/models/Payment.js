const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const paymentSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId, ref: 'User',
        require: true 
    },
    amount: {
        type: Number,
        require: true 
    },
    
    paymentDate:{
        type: Date,
        default: Date.now(),
    },
    paymentType: {
        type: String,
        require: true 
    },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
