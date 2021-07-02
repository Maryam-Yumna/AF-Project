import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
// import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import ReviewerDashboard from './components/Reviewer/ReviewerDashboard'
import Workshop from './components/Reviewer/Workshop'
import Register from './components/Login/Register'
import Footer from './components/Footer/Footer';
import PaymentForm from './components/PaymentForm/PaymentForm';
import Login from './components/Login/Login';
import WorkshopPresenter from './components/User/WorkshopPresenter';
import Resercher from './components/User/Resercher';
import Attendee from './components/User/Attendee';
import Papers from './components/Reviewer/Papers';
import Createconference from './components/Conference/createConference';
import getconference from './components/Conference/conferences';
import EditConference from './components/Conference/editSingle';


import Approveall from './components/AdminApprove/approveALL';
import ApproveSingle from './components/AdminApprove/aprroveSingle';
import AdminHome from './components/AdminHome/home';
import Admin2Home from './components/AdminHome2/home';
import AddKeynoteTemp from "./components/KeynoteSpeakers/ByEditor/AddKeynoteTemp";
import ViewTempKeynotes from "./components/KeynoteSpeakers/ByAdmin/ViewTempKeynotes";
import AddKeynote from "./components/KeynoteSpeakers/ByAdmin/AddKeynote";
import KeynoteSpeakers from "./components/KeynoteSpeakers/ByClient/KeynoteSpeakers";
import ViewKeynotes from "./components/KeynoteSpeakers/ByEditor/ViewKeynotes";
import Download from "./components/Template/Download";
// import uploadfiles from './components/uploadfiles';

class App extends Component {
    render() {
        return (
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/reviewerDashboard" exact component={ReviewerDashboard}/>
                    <Route path="/workshop/pending" exact component={Workshop}/>
                    <Route path="/papers/pending" exact component={Papers}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/payment" exact component={PaymentForm}/>
                    <Route path="/workshopPresenter" exact component={WorkshopPresenter}/>
                    <Route path="/resercher" exact component={Resercher}/>
                    <Route path="/attendee" exact component={Attendee}/>

                    <Route path="/adminHome" component={AdminHome} exact/>
                    <Route path="/admin2Home" component={Admin2Home} exact/>
                    <Route path = "/createConference" component = {Createconference} ></Route>
                    <Route path = "/Conferences" component = {getconference} ></Route>
                    <Route path="/editConference/:id" component={EditConference} />


                    <Route path="/approveall" component={Approveall} />
                    <Route path="/approvesingle/:id" component={ApproveSingle} />

                    <Route path = "/addKeynoteTemp"><AddKeynoteTemp/></Route>
                    <Route path = "/viewTempKeynotes"><ViewTempKeynotes/></Route>
                    <Route path = "/addAccepted"><AddKeynote/></Route>
                    <Route path = "/keynoteSpeakers"><KeynoteSpeakers/></Route>
                    <Route path = "/viewKeynotes"><ViewKeynotes/></Route>
                    <Route path="/download" component={Download} />

                    <Route path="/login" exact component={Login}/>
                    
                </Switch>
                {/* <Footer/> */}
            </Router>
            );
    }
}

export default App;