import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
// import uploadfiles from './components/uploadfiles';

class App extends Component {
    render() {
        return (
            <Router>
                <NavBar/>
                {/* <uploadfiles/> */}
                <Switch>
                <Route path="/" exact component={Home}/>
                </Switch>
            </Router>
            );
    }
}

export default App;