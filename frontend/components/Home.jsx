import React, { Component } from 'react';
// import Background from 'url:../public/images/BackgroundHomeImage.png';
import Background from 'url:../public/images/background2.png';
import cc from 'url:../public/images/images.jpg';
import React , {Component} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            conferences: []
          }
    }

    componentDidMount() {
        axios.get('http://localhost:8070/conferenceAPi/getaproved')
        .then(response => {
            this.setState({ conferences: response.data.data });
          })
        }

   
    render() {
        return (
           

          <div className="" >
          
          <img src= {Background} style={{width: '100%'}} />

     
                <center>
                <img class="card-img-top" src="https://www.cosl.lk/images/slidernew/slider-3.jpg" alt="Card image cap" style={{width: '50%' , height:'50%' }} />
                <img class="card-img-top" src="https://cmb.ac.lk/wp-content/uploads/icdm23-409x258.jpg" alt="Card image cap" style={{width: '50%' , height:'50%' }} />
                </center>
                <div class="card-body">
                    <h5 class="card-title">WELCOME TO CONVENTION</h5>
                    <h2 class="card-title">BIGGEST DEVELOPER CONFERENCE 2020</h2>
                    <p class="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <a href="#" class="btn btn-primary">check here</a>
                </div>
              
              
         
         

            <h1 style={{color:"#272554"}} >Conferences this year</h1>
             {this.state.conferences.length > 0 && this.state.conferences.map((item, index) => (
              <div key={index} className="card mb-3" src= {Background} style={{}}> 
                <div className="p-3" onClick={e => this.navigateSubjectPage(e, item._id)}> 
                              
                               <center>  
                  <table id="cust" style={{width: '70%'}}>
                      
                  <img src= {cc} style={{width: '400px'}}/>
                    <tr>
                    
                      <td rowspan="2"><h2>{item.confName}</h2></td>
                      
                    </tr>

                    <tr>
                     
                      <td>{item.year}</td>
                  
                    </tr>
                    <tr>
                     
                      <td rowspan="2">{item.description}</td>
                   
                    </tr>
                    <tr>
                      
                      <td>{item.startingDate} to {item.endDate}      </td>
                     
                    </tr>
                    
                    <tr>
                      
                      <td>At{item.venue}</td>
                     
                    </tr>
                    <tr>
                    
                      <td> <lable>Registration Open from :{item.RegistrationOpen} to  {item.RegistrationClosed}</lable>
                      <td> <lable>Paper SubmitionOpen :{item.paperSubmitionOpen} to  {item.workshopSubmitionClose}</lable></td>
                     <lable>workshop Submition Open :{item.workshopSubmitionOpen} to  {item.workshopSubmitionClose}</lable></td>
                     
                      
                  
                    </tr>
                   
                  
                    
                  </table>
                    </center>
                                  
                </div>

         
              </div>
            ))}
          </div>
         
       )
      }
    }

    


export default Home;