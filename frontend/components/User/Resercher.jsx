import React, { Component } from 'react';
import PaymentForm from '../PaymentForm/PaymentForm';
import axios from 'axios'
class Resercher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paper: {},
            user:{},
            amount: 5000,
            hasPaid: false,
            userType:"resercher"
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

        axios.get(`http://localhost:8070/paperUpload/user/paper`, {
            headers:{
                'authorization':token
            } 
        })
        .then((data)=>{
            this.setState({
                paper: data.data
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
            <div className="container w-50 p-3 text-center" style={{ marginTop: '60px'}}>
                <h1>User Home</h1>
                <div className="container w-100 p-3 text-center" style={{backgroundColor: '#ebe6e6', marginTop: '60px'}}>
                    <h3>User Details</h3>
                        <div className="mt-1 mb-1"><label htmlFor="name">Name: {this.state.user.name} </label></div>
                        <div className="mt-1 mb-1"><label htmlFor="eail">Email: {this.state.user.email} </label> </div>
                        <div className="mt-1 mb-1"><label htmlFor="phone">Phone: {this.state.user.phone} </label> </div>
                </div>

                <div className="container w-100 p-3 text-center" style={{backgroundColor: '#ebe6e6', marginTop: '60px'}}>
                    <h3>Reserch Paper </h3>
                    <table className="table">
                            <thead>
                                <tr>
                                <th scope="col" id ='file'>Submitted Paper</th>
                                <th scope="col" id ='uploadDate'>Upload Date</th>
                                <th scope="col" id ='approve'>Approval Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <th scope="row" id ='trfile'>
                                        <a href={`http://localhost:8070/${this.state.paper.filePath}`}>{this.state.paper.title}</a>
                                    </th>
                                    <td id ='trUploadDate'>{this.state.paper.uploadDate}</td>
                                    <td id ='trUploadDate'>{this.state.paper.approval}</td>
                                </tr>
                            </tbody>
                        </table>
                </div>

                {this.state.paper.approval === "approved"?(
                    <div>
                        <div className="container w-100 p-3 text-center" style={{backgroundColor: '#72ed7b', marginTop: '60px'}}>
                            <h5>congratulations Your Reserch Paper Has Been Approved</h5>
                            {!this.state.hasPaid?(
                                <div>
                                    <h6>You have to make a payment of {this.state.amount} to complete the registration</h6>
                                    <PaymentForm amount={this.state.amount} updatePaymentStatus = {this.updatePaymentStatus} userType={this.state.userType}/>
                                </div>
                            ) :
                            <div>
                            <h6>You have to completed your payment</h6>
                        </div>}
                        </div>
                    </div>
                ):this.state.paper.approval === "rejected"?(
                    <div className="container w-100 p-3 text-center" style={{backgroundColor: '#ed4c57', marginTop: '60px'}}>
                    <h5>Your Reserch paper has been Rejected</h5>
                </div>
                ):null}
            </div>
        );
    }
}

export default Resercher;