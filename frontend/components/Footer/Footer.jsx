import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className='footer text-center py-4 bg-dark text-white mt-2' style={{bottom: 0, position: 'sticky', width:'100%', zIndex:0}}>
                    <div className='container'>
                        <span >Footer </span>
                        <Link>Admin Login</Link>
                        
                    </div>

                </footer>
            </div>
        );
    }
}

export default Footer;