import React, { Component } from 'react';
import axios from 'axios';

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

        axios.put('http://localhost:8070/workshopUpload/updateApproval',paper)
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
            <div className="container w-75 p-3 text-center" style={{backgroundColor: '#ebe6e6', marginTop: '60px'}}>
                    <h2>Pending Papers</h2>
                   <div className="container w-75 p-3 ">
                       {this.state.uploads.length != 0 ?  
                       <table className="table">
                        <thead>
                            <tr>
                            <th scope="col" id ='file'>file</th>
                            <th scope="col" id ='user'>User</th>
                            <th scope="col" id ='name'>Name</th>
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
                                        <a href={`http://localhost:8070/${paper.filePath}`}>{paper.title}</a>
                                        </th>
                                        <td id ='trSize'>{paper.fileSize}</td>
                                        <td id ='trName'>{paper.user.name}</td>
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
        );
    }
}

export default Papers;