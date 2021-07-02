import React , {Component} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

class Conferences extends Component{
    constructor(props){
        super(props);

        this.state = {
            conferences: []
          }
    }

    componentDidMount() {
        axios.get('http://localhost:8070/conferenceAPi/')
        .then(response => {
            this.setState({ conferences: response.data.data });
          })
        }

   

    render() {
        return (<div class = "bodyt">
          <br /> <br /> <br />
          <div className="container">
            <h1 style={{color:"white"}}>Conferences</h1>
            {this.state.conferences.length > 0 && this.state.conferences.map((item, index) => (
              <div key={index} className="card mb-3">
                <div className="p-3" onClick={e => this.navigateSubjectPage(e, item._id)}> 
                <h4><b>Conference Name: {item.confName}</b></h4>
                  <h5>Year: {item.year}</h5>
                  <h5>Descriprion: {item.description}</h5>
                  <h5>startingDate: {item.startingDate}</h5>
                  <h5>endDate: {item.endDate}</h5>
                  <h5>venue: {item.venue}</h5>
                  <h5>RegistrationOpen: {item.RegistrationOpen}</h5>
                  <h5>RegistrationClosed: {item.RegistrationClosed}</h5>
                  <h5>paperSubmitionOpen: {item.paperSubmitionOpen}</h5>
                  <h5>workshopSubmitionOpen: {item.workshopSubmitionOpen}</h5>
                  <h5>workshopSubmitionClose: {item.workshopSubmitionClose}</h5>
                  <h5 style={{color:"red"}}>status: {item.status}</h5>

                 
                </div>

                <div className="row mt-2">
                <button id="button2" className="col btn btn-danger ps-4 pe-4">  <Link to={"/approvesingle/" + item._id} className="col btn ps-4 pe-4" style={{color:"white"}}>Approve</Link></button>
              </div>
               
         
              </div>
            ))}
          </div>
          </div> )
      }
    }

   

    

export default Conferences;