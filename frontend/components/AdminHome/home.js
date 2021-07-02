import React, { Component } from 'react';
// import Background from 'url:../public/images/BackgroundHomeImage.png';

import './home.css';

class AdminHome extends Component {
    render() {
        return (<div className="admin-body">
            <div class = "backgroundImage">
                <div class = "">
                    <br></br>
                    <button type="button" class="block"><h1>Add Conference</h1></button>
                    <button type="button" class="block"><h1>conferences</h1></button>
                    <button type="button" class="block"><h1>Workshops</h1></button>
          
                </div>

            </div>
       </div> );
    }
}

export default AdminHome;