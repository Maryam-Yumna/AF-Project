import React, { Component } from 'react';
import axios from 'axios';
// import './payment.css'

const initialState ={
    firstName: '',
    lastName:'',
    cardNumber:'',
    cvc:'',
    cardExpDate:'',
    user:{}
    
}

class PaymentForm extends Component {
    constructor(props){
        super(props);
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        let Payment ={
            amount: this.props.amount,
            firstName: this.state.firstName,
            cardNumber: this.state.cardNumber,
            lastName: this.state.lastName,
            cvc: this.state.cvc,
            cardExpDate: this.state.cardExpDate,
            paymentType: this.props.userType
        }

        console.log(Payment);
        let token = localStorage.getItem("token");

        axios.post('http://localhost:8070/payment/newPayment', Payment, {
            headers:{
                'authorization':token
            } 
        })
        .then(response=>{
            this.props.updatePaymentStatus();
         })
        .catch(error=>{
            console.log(error.message)
            alert(error.message);
        })  
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    componentDidMount(){

    }
    
    render() {
        return (
            <div >
                {/* <div className="paymentImage"></div> */}
                <div >
                
                    <form class="row g-3 text-start" onSubmit={this.onSubmit}>
                        <div className="col-md-12">
                            <label for="amount" class="form-label">Amount</label>
                            <input 
                                type="number" 
                                class="form-control" 
                                id="amount" 
                                name="amount" 
                                value = {this.props.amount}
                                disabled
                            />
                        </div>
                            <div class="col-md-6">
                                <label for="firstName" class="form-label">First Name</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="firstName" 
                                    name="firstName" 
                                    value={this.state.firstName}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div class="col-md-6">
                                <label for="lastName" class="form-label">Last Name</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="lastName" 
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.onChange} 
                                    required
                                />
                            </div>
                            <div class="col-md-6">
                                <label for="cardNumber" class="form-label">Credit Card Number</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="cardNumber" 
                                    name="cardNumber" 
                                    value={this.state.cardNumber}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div class="col-md-6">
                                <label for="cvc" class="form-label">Security Code</label>
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    id="cvc" 
                                    placeholder="CVC" 
                                    name="cvc"
                                    value={this.state.cvc}
                                    onChange={this.onChange} 
                                    required
                                />
                            </div>
                            <div class="col-md-6">
                                <label for="cardExp" class="form-label">Card Expiration Date</label>
                                <input 
                                    type="date" 
                                    class="form-control" 
                                    id="cardExp" 
                                    name="cardExpDate"
                                    value={this.state.cardExpDate}
                                    onChange={this.onChange} 
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-lg text-white" style={{backgroundColor:"#585c61"}}>Submit</button>
                        </form>
                </div>
            </div>
        );
    }
}

export default PaymentForm;