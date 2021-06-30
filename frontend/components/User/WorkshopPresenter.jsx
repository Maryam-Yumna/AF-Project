import React, { Component } from 'react';
import axios from 'axios';
import PaymentForm from '../PaymentForm/PaymentForm';

class WorkshopPresenter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workshop: {},
            user:{},
        }
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
        axios.get(`http://localhost:8070/workshopUpload/user/workshop`, {
            headers:{
                'authorization':token
            } 
        })
        .then((data)=>{
            this.setState({
                workshop: data.data
            })
            
        })
        .catch(err=>{
            console.error(err);
        });
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
                    <h3>Uploaded Workshop Proposal</h3>
                    <table className="table">
                            <thead>
                                <tr>
                                <th scope="col" id ='file'>file</th>
                                <th scope="col" id ='uploadDate'>Upload Date</th>
                                <th scope="col" id ='approve'>Approval Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <th scope="row" id ='trfile'>
                                        <a href={`http://localhost:8070/${this.state.workshop.filePath}`}>{this.state.workshop.title}</a>
                                    </th>
                                    <td id ='trUploadDate'>{this.state.workshop.uploadDate}</td>
                                    <td id ='trUploadDate'>{this.state.workshop.approval}</td>
                                    </tr>
                            </tbody>
                        </table>
                </div>

                {this.state.workshop.approval === "approved"?(
                    <div>
                        <div className="container w-100 p-3 text-center" style={{backgroundColor: '#72ed7b', marginTop: '60px'}}>
                            <h5>congratulations Your Workshop Proposal Has Been Approved</h5>
                        </div>
                    </div>
                ):this.state.workshop.approval === "rejected"?(
                    <div className="container w-100 p-3 text-center" style={{backgroundColor: '#ed4c57', marginTop: '60px'}}>
                    <h5>Your Workshop Proposal has been Rejected</h5>
                </div>
                ):null}
            </div>
        );
    }
}

export default WorkshopPresenter;