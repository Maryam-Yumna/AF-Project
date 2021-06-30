import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            user:{}
        }
        this.logout = this.logout.bind(this);
    }

    logout(){
        console.log("loggedout")
        this.setState({
            user:{}
        });
        localStorage.clear();
        window.location.href = '/';

        
    }

    componentDidMount(){
        let token = localStorage.getItem("token");
        
        if(token){
            axios.get(`http://localhost:8070/auth/user`, {
            headers:{
                'authorization':token
            } 
        })
        .then((data)=>{
            this.setState({
                user: data.data
            });
        })
        .catch(err=>{
            console.error(err);
        });
        }
    }
    render() {
        return (
            <div >
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark"style={{ position: 'fixed', width: '100%', top: '0'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ICAF</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    {this.state.user.userType === "admin"?(
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/" activeclassname="active">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" activeclassname="active">Downloads</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" activeclassname="active" >Researchers</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" activeclassname="active">WorkShops</Link>
                                    </li>
                                </ul>
                            ):this.state.user.userType === "editor"?(
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/" activeclassname="active">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" activeclassname="active">Downloads</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" activeclassname="active" >Researchers</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" activeclassname="active">WorkShops</Link>
                                    </li>
                                </ul>
                            ):this.state.user.userType === "reviewer"?(
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/reviewerDashboard" activeclassname="active">Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/workshop/pending" activeclassname="active">Pending Proposals</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="/" activeclassname="active" >Approved Proposals</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" activeclassname="active" >Rejected Proposals</Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/papers/pending" activeclassname="active">Pending Papers</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="/" activeclassname="active">Approved Papers</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" activeclassname="active">Rejected Papers</Link>
                                    </li> */}
                                </ul>
                            ):this.state.user.userType === "workshop conductor"?(
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/workshopConductor" activeclassname="active">Workshop Conductor Home</Link>
                                    </li>
                                </ul>
                            ):this.state.user.userType === "resercher"?(
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/resercher" activeclassname="active">Researcher Home</Link>
                                    </li>
                                </ul>
                            ):this.state.user.userType === "attendee"?(
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/attendee" activeclassname="active">Attendee Home</Link>
                                    </li>
                                </ul>
                            ):(
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/" activeclassname="active">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" activeclassname="active">Downloads</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" activeclassname="active" >Researchers</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" activeclassname="active">WorkShops</Link>
                                    </li>
                                </ul>
                            )}
                        {/* </li> */}
                       
                    {/* </ul> */}
                    <div className="d-flex" id="navbarText2">
                    {this.state.user.userType? (
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" onClick={this.logout}>
                            <div>
                                <Link className="nav-link" activeclassname="active">Logout</Link>
                            </div>
                        </li>
                    </ul>
                        
                    ):(
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        
                                <div>
                                    <Link className="nav-link" to="/login" activeclassname="active">Login</Link>
                                </div>
                            
                        </li>
                        <li className="nav-item">
                            
                                <div>
                                    <Link className="nav-link" to="/register" activeclassname="active">Register</Link>
                                </div>
                            
                        </li>
                    </ul>
                    )}
                    </div>
                    </div>
                </div>
            </nav>
            </div>
        );
    }
}
export default NavBar;