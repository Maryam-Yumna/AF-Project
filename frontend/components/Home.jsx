import React, { Component } from 'react';
// import Background from 'url:../public/images/BackgroundHomeImage.png';
import Background from 'url:../public/images/background2.png';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="backgroundImage">
                    <img src= {Background} style={{width: '100%'}}/>
                </div>
            </div>
        );
    }
}

export default Home;