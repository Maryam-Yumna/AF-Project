import React, { Component } from 'react';
import PaymentForm from '../PaymentForm/PaymentForm';
import axios from 'axios';
import './payment.css'

class Attendee extends Component {

    constructor(props){
        super(props);
        this.state={
            registrationFee: 4500,
            userType: "attendee",
            hasPaid: false,
            user:{}
        }
        this.updatePaymentStatus = this.updatePaymentStatus.bind(this);
    }

    componentDidMount(){
        let token = localStorage.getItem("token");

        axios.get(`http://localhost:8070/auth/user`, {
            headers:{
                'authorization':token
            } 
        })
        .then((data)=>{
            this.setState({
                user: data.data
            })
        })
        .catch(err=>{
            console.error(err);
        });

        axios.get(`http://localhost:8070/payment/hasPaid`, {
            headers:{
                'authorization':token
            } 
        })
        .then((data)=>{
            this.setState({
                hasPaid: data.data.hasPaid
            })
        })
        .catch(err=>{
            console.error(err);
        });
    }
    updatePaymentStatus(){
        this.setState({
            hasPaid: true
        })
    }
    render() {
        return (
            <div>
                {!this.state.hasPaid?(
                    // <div className="container w-100 p-3 text-center">
                    <div className="paymentContainer">
                        <div className="paymentImage"></div>
                        <div className="paymentWrapper">
                            <h1 style={{textAlign:"center"}}>Payment</h1>
                            <PaymentForm  amount={this.state.registrationFee} userType={this.state.userType} updatePaymentStatus = {this.updatePaymentStatus}/>
                        </div>
                    </div>
                ):( <div className="" id="attendeeWrapper">
                        <div className="attendeeImg"></div>
                        <div className="attendeeContentWrapper">
                            <div className="container w-100 p-3" style={{backgroundColor: '#ebe6e6'}}>
                                <h3 style={{textAlign:"center"}}>User Details</h3>
                                    <div className="mt-1 mb-1"><label htmlFor="name">Name: {this.state.user.name} </label></div>
                                    <div className="mt-1 mb-1"><label htmlFor="eail">Email: {this.state.user.email} </label> </div>
                                    <div className="mt-1 mb-1"><label htmlFor="phone">Phone: {this.state.user.phone} </label> </div>
                            </div>

                            <div className="container w-100 p-3 text-center" style={{backgroundColor: '#72ed7b', marginTop: '60px'}}>
                                <h5>You have succcesfully completed the payment and registered as an attendee</h5>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Attendee;