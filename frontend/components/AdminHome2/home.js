import React, { Component } from 'react';
// import Background from 'url:../public/images/BackgroundHomeImage.png';
import { Link } from 'react-router-dom';

import './home.css';

class AdminHome extends Component {
    render() {
        return (<div className="admin-body">
            <div class = "backgroundImage">
                <div class = "">
                    <br></br><br></br>
                    <button type="button" class="block"><h1 ><Link style={{color:"white"}} className="nav-link" to="/approveall" activeclassname="active">Approve Conferences</Link>
                                  </h1></button>
                    <button type="button" class="block"><h1>conferences</h1></button>
                    
          
                </div>

            </div>
       </div> );
    }
}

export default AdminHome;