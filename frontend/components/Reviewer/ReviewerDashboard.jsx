import React, { Component } from 'react';
import Workshop from 'url:../../public/images/Workshops.png'
import ResearchPaper from 'url:../../public/images/ResearchPapers.png'
import ButtonCard from '../Cards/ButtonCard';
import './dashboard.css'


class ReviewerDashboard extends Component {
    render() {
        return (
            // <div class="container-sm" >
            <div class="dashboardContainer" >
                <div class="d-flex justify-content-sm-center" id="rwDashboard">
                {/* <div class="rwDashboard" > */}
                    <ButtonCard title='Research Paper Uploads' path='/papers/pending' image={ResearchPaper}/>
                    <ButtonCard title='Workshop Uploads' path='/workshop/pending' image={Workshop}/>
                </div>
            </div>
        );
    }
}

export default ReviewerDashboard;