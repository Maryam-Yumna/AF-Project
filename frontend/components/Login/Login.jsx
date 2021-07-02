import React, { Component } from 'react';
import axios from 'axios';
import './login.css';

const initialState ={
    password:'',
    email:'',
    userType:''
    
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        let User ={
            password: this.state.password,
            email: this.state.email
        }

        axios.post('http://localhost:8070/auth/login', User)
        .then(response=>{
            console.log(response.data);
            localStorage.setItem('token', response.data.token);

            let userType = response.data.user.userType;

            console.log(userType==="workshop conductor");
            if(response.data.message === "success"){
                if (userType === "admin"){
                    window.location.href = '/'
                }else if(userType === "reviewer"){
                    window.location.href = '/reviewerDashboard'
                }else if(userType === "editor"){
                    window.location.href = '/'
                }else if(userType === "attendee"){
                    window.location.href = '/attendee'
                }else if(userType === "workshop conductor"){
                    window.location.href = '/workshopPresenter'
                }else if(userType === "resercher"){
                    window.location.href = '/resercher'
                }else {
                    window.location.href = '/'
                }
            }
            console.log("userType", userType);    
        })
        .catch(error=>{
            console.log(error.message)
            // alert(error.message);
        })
    }
    render() {
        return (
            <div className="loginContainer">
                <div className="loginImage"></div>
                <div className="" id="loginWrapper">
                    <div className="loginForm">
                        <h1 style={{textAlign:"center"}}> Login </h1>
                        <form className="row g-3" onSubmit={this.onSubmit} >
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    vale={this.state.email} 
                                    name ="email" 
                                    id="email"
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    vale={this.state.password} 
                                    name ="password" 
                                    id="password"
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-lg text-white" style={{backgroundColor:"#585c61"}}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;