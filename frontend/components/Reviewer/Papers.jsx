import React, { Component } from 'react';
import axios from 'axios';
import './uploads.css';
import "bootstrap-icons/font/bootstrap-icons.css";

class Papers extends Component {
    constructor(){
        super();
        this.state={
            uploads:[],
            message:''   
        }

        this.getPendingPapers= this.getPendingPapers.bind(this);
    }

    componentDidMount(){
        this.getPendingPapers();
    }

    getPendingPapers(){

        let status = "pending"
        axios.get('http://localhost:8070/paperUpload/'+status)
        .then((data)=>{
            this.setState({
                uploads: data.data
            }, ()=>{console.log(this.state.uploads)})
            console.log(data.data)
        })
        .catch(err=>{
            console.error(err);
        });
    }

    updateApproval=(id, approval)=>{
        let paper = {
            id: id,
            approval: approval
        }

        axios.put('http://localhost:8070/paperUpload/updateApproval',paper)
        .then((response)=>{
            this.setState({
                message: response.message
            });
            this.getPendingPapers();
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    render() {
        return (
            <div className="uploadBackground"> 
                <div className="container w-75 p-3 text-center" id="uploads">
                        <h2>Pending Papers</h2>
                    <div className="container w-75 p-3">
                        {this.state.uploads.length != 0 ?  
                        <table className="table table-dark table-striped table-hover" >
                            <thead>
                                <tr>
                                <th scope="col" id ='file'>file</th>
                                <th scope="col" id ='name'>Name</th>
                                <th scope="col" id ='email'>Email</th>
                                <th scope="col" id ='uploadDate'>Upload Date</th>
                                <th scope="col" id ='approve'>Approve</th>
                                <th scope="col" id ='reject'>Reject</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.uploads.map((paper)=>{
                                    return(
                                        <tr key={paper._id}>
                                            <th scope="row" id ='trfile'>
                                            <i class="bi bi-file-earmark-pdf"></i>
                                            <a href={`http://localhost:8070/${paper.filePath}`} style={{color: "white"}}>{paper.title}</a>
                                            </th>
                                            <td id ='trName'>{paper.user.name}</td>
                                            <td id ='trEmail'>{paper.user.email}</td>
                                            <td id ='trUploadDate'>{paper.uploadDate}</td>
                                            <td  id ='trApprove'><button id='btnApprove' type="button" className="btn btn-success" onClick={()=>this.updateApproval(paper._id, 'approved')}>Approve</button></td>
                                            <td  id ='trRreject'><button id='btnReject' type="button" className="btn btn-danger" onClick={()=>this.updateApproval(paper._id, 'rejected')}>Reject</button></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        // : <img src={Unavailable} />}
                        : <div/>}
                    </div>
                    </div>
                </div>
        );
    }
}

export default Papers;