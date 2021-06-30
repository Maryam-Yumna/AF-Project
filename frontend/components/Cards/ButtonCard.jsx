import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonCard extends Component {
    render() {
        return (
            <div className="btn-group me-4">
                <Link class="btn btn-secondary btn-lg" style={{margin: '10px'}} to={this.props.path} style={{width: '100%', height:'100%'}}>
                    <div className='row'>
                        <h5>{this.props.title}</h5>
                    </div>
                    <div className='row'>
                        <img src={this.props.image}/>
                    </div>
                        
                </Link>
            </div>
        );
    }
}

export default ButtonCard;