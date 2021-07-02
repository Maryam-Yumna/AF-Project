import React, { Component } from 'react';
import axios from 'axios';
import './workshop.css';
import "bootstrap-icons/font/bootstrap-icons.css";

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
            <div className="wcContainer" >
                <h1>User Home</h1>
                <div className="wcImg"></div>

                <div className="wcWrapper" style={{backgroundColor: '#ebe6e6'}}>
                    <h3 style={{textAlign:"center"}}> User Details</h3>
                    <div className="container w-75 p-3" >
                        <div className="mt-1 mb-1"><label htmlFor="name">Name: {this.state.user.name} </label></div>
                        <div className="mt-1 mb-1"><label htmlFor="eail">Email: {this.state.user.email} </label> </div>
                        <div className="mt-1 mb-1"><label htmlFor="phone">Phone: {this.state.user.phone} </label> </div>
                    </div>
                

                <div className="container w-100 p-3 " style={{backgroundColor: '#ebe6e6'}}>
                    <h3 style={{textAlign:"center"}}>Uploaded Workshop Proposal Details</h3>
                    <div className="container w-75 p-3" >
                        <div className="mt-1 mb-1"><label htmlFor="file">File: <i class="bi bi-file-earmark-pdf"></i><a href={`http://localhost:8070/${this.state.workshop.filePath}`}>{this.state.workshop.title}</a> </label></div>
                        <div className="mt-1 mb-1"><label htmlFor="update">Upload Date: {this.state.workshop.uploadDate} </label> </div>
                        <div className="mt-1 mb-1"><label htmlFor="status">Approval Status: {this.state.workshop.approval} </label> </div>
                    </div>
                </div>

                {this.state.workshop.approval === "approved"?(
                    <div>
                        <div className="container w-100 p-3 text-center" style={{backgroundColor: '#72ed7b'}}>
                            <h5>congratulations Your Workshop Proposal Has Been Approved</h5>
                        </div>
                    </div>
                ):this.state.workshop.approval === "rejected"?(
                    <div className="container w-100 p-3 text-center" style={{backgroundColor: '#ed4c57'}}>
                    <h5>Your Workshop Proposal has been Rejected</h5>
                </div>
                ):null}
            </div>
            </div>
        );
    }
}

export default WorkshopPresenter;