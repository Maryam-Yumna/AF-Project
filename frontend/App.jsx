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
// import uploadfiles from './components/uploadfiles';
import AddKeynoteTemp from "./components/KeynoteSpeakers/AddKeynoteTemp";
import ViewTempKeynotes from "./components/KeynoteSpeakers/ViewTempKeynotes";
import AddKeynote from "./components/KeynoteSpeakers/AddKeynote";
//import TemplateDownload from "./components/TemplateDownload";
import KeynoteSpeakers from "./components/KeynoteSpeakers/KeynoteSpeakers";

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
                    <Route path = "/addKeynoteTemp">
                        <AddKeynoteTemp/>
                    </Route>
                    <Route path = "/viewTempKeynotes">
                        <ViewTempKeynotes/>
                    </Route>
                    <Route path = "/addAccepted">
                        <AddKeynote/>
                    </Route>
                    <Route path = "/templateDownload">
                        <TemplateDownload/>
                    </Route>
                    <Route path = "/keynoteSpeakers">
                        <KeynoteSpeakers/>
                    </Route>
                    <Route path="/login" exact component={Login}/>
                    
                </Switch>
                {/* <Footer/> */}
            </Router>
            );
    }
}

export default App;