import React, { Component } from 'react';
import axois from 'axios';
import PaymentForm from '../PaymentForm/PaymentForm';

const initialState ={
    name: '',
    password:'',
    username:'',
    email:'',
    phone:'',
    type: '',
    file:'',
    title:'',
    token:'',
    attendeeRegistrationFee: 4500,
    
}


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
    }
    
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onFileChange(e){
        let file = e.target.files[0];
        this.setState({ file: file }, ()=>{console.log(this.state.file)});
        console.log(file);

    }

    onSubmit(e){
        e.preventDefault();
        let User ={
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone,
            userType: this.state.type,
        }

        console.log(User);
        console.log(this.state.file);

        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('title', this.state.title);

        axois.post('http://localhost:8070/user/register', User)
        .then(response=>{
            alert('Data Successfully inserted');
            localStorage.setItem('token', response.data.token);
            if(this.state.type=== "resercher"){
                return axois.post('http://localhost:8070/paperUpload/newPaperUpload', formData, {
                    headers:{
                        'authorization':response.data.token
                    } 
                })
            }
            else if(this.state.type === "workshop conductor"){
                return axois.post('http://localhost:8070/workshopUpload/newWorkshopUpload', formData, {
                    headers:{
                        'authorization':response.data.token
                    } 
                })
            }
            else{
                this.props.history.push("/attendee");
            }
        })
        .then(response=>{
            if(this.state.type=== "resercher"){
                alert('Your Paper has been submitted');
                this.props.history.push("/resercher");
            }
            else if(this.state.type === "workshop conductor"){
                alert('Your workshop proposal has been submitted');
                this.props.history.push("/workshopPresenter");
            }
            else{
                this.props.history.push("/attendee");
            }
        })
        .catch(error=>{
            console.log(error.message)
            alert(error.message);
        });
    }
    render() {
        return (
            <div className="container w-25 p-3" style={{backgroundColor: '#ebe6e6', marginTop: '60px'}}>
                <h1> Register</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            vale={this.state.name} 
                            name ="name" 
                            id="name"
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            vale={this.state.username} 
                            name ="username" 
                            id="username"
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
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            value={this.state.phone}
                            name="phone" 
                            id="phone"
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">User Type</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="type" id="resercher" value="resercher" onChange={this.onChange}/>
                                <label className="form-check-label" htmlFor="resercher">
                                    Researcher
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="type" id="workshopConductor" value="workshop conductor" onChange={this.onChange}/>
                                <label className="form-check-label" htmlFor="workshopConductor">
                                    Workshop Condutor
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="type" id="attendee" value="attendee"  onChange={this.onChange}/>
                                <label className="form-check-label" htmlFor="attendee">
                                    Attendee
                                </label>
                            </div>
                    </div>
                    {this.state.type ==="resercher" ? 
                        <div className="mb-3">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Reserch Paper Title</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    vale={this.state.title} 
                                    name ="title" 
                                    id="title"
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="uploadReserchPaper" className="form-label">Upload Reserch Paper</label>
                                <input 
                                    className="form-control" 
                                    type="file" 
                                    id="uploadReserchPaper"
                                    onChange={this.onFileChange}
                                     required
                                />
                            </div>
                        </div>:
                        this.state.type ==="workshop conductor" ? 
                        <div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Workshop Title</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    vale={this.state.title} 
                                    name ="title" 
                                    id="title"
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="uploadWorkshopProposal" className="form-label">Upload Workshop Proposal</label>
                                <input 
                                    className="form-control" 
                                    type="file" 
                                    id="uploadWorkshopProposal"
                                    onChange={this.onFileChange}
                                    required
                                />
                            </div>
                        </div>
                        :
                        this.state.type==="attendee"?
                        <div>
                        </div>
                        :null}
                    {
                        this.state.type === "resercher" || this.state.type === "workshop conductor" ?
                            <button type="submit" className="btn btn-primary">Register</button>
                        : <button type="submit" className="btn btn-primary">Pay Now </button>
                    }
                </form>
            </div>
        );
    }
}

export default Register;