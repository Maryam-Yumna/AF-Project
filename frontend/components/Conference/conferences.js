import React , {Component} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './conference.css';

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
  
         
          <div className="container"
          ><br /><br />
            <h1 style={{color:"white"}} >Conferences</h1>
            <h3 style={{color:"white"}} >confirmation will recive within two days. You can update your details after submition within submission date</h3>
            {this.state.conferences.length > 0 && this.state.conferences.map((item, index) => (
              <div key={index} className="card mb-3">
                <div className="p-3" onClick={e => this.navigateSubjectPage(e, item._id)}> 
                                 
                  <table id="customers">
                   
                    <tr>
                      <td>Conference Name :</td>
                      <td>{item.confName}</td>
                      
                    </tr>
                    <tr>
                      <td>Year :</td>
                      <td>{item.year}</td>
                  
                    </tr>
                    <tr>
                      <td>Descriprion:</td>
                      <td>{item.description}</td>
                   
                    </tr>
                    <tr>
                      <td>startingDate</td>
                      <td>{item.startingDate}</td>
                     
                    </tr>
                    <tr>
                      <td>endDate:</td>
                      <td> {item.endDate}</td>
                     
                    </tr>
                    <tr>
                      <td>venue</td>
                      <td>{item.venue}</td>
                     
                    </tr>
                    <tr>
                      <td>RegistrationOpen: </td>
                      <td>{item.RegistrationOpen}</td>
                  
                    </tr>
                    <tr>
                      <td>RegistrationClosed: </td>
                      <td>{item.RegistrationClosed}</td>
                     
                    </tr>
                    <tr>
                      <td>paperSubmitionOpen:</td>
                      <td>{item.paperSubmitionOpen}</td>
                     
                    </tr>
                    <tr>
                      <td>workshopSubmitionOpen: </td>
                      <td>{item.workshopSubmitionOpen}</td>
                      
                    </tr>
                    <tr>
                      <td>workshopSubmitionClose: </td>
                      <td>{item.workshopSubmitionClose}</td>
                      
                    </tr>
                    <tr>
                      <td>status:  </td>
                      <td style={{color:"red"}}><h5>{item.status}</h5></td>
                      
                    </tr>
                    <tr>
                      <td></td>
                      <td><div className="row mt-2">
                <button id="button2" className="col btn btn-danger ps-4 pe-4" style={{color:"balck", border:"none" ,margin:"2px", width :"100px" , background :"#rgba(58, 9, 148, 0.953)"}}>  <Link to={"/editConference/" + item._id}  style={{color:"black" , width :"100px" }}>Edit</Link></button>
             
                  <button id="button2" className="col btn btn-danger ps-4 pe-4" style={{color:"black" ,border:"none",margin:"2px", width :"100px" ,background :"#rgba(58, 9, 148, 0.953)"}} onClick={()=>{ deleteItem(item._id)}}>Delete</button>
              </div></td>
                      
                    </tr>
                  </table>

                                  
                </div>

         
              </div>
            ))}
          </div>
          </div>
       )
      }
    }

    let deleteItem = (id)=>{
        axios.delete('http://localhost:8070/conferenceAPi/delete/'+id)
      .then(response => { 
          console.log(response.data)
          alert("Conference details deleted ")
       
        })
      .catch(e=>{
          console.log(e)
          
          
      });

    }

    let updateItem = (id)=>{
        axios.delete('http://localhost:8070/conferenceAPi/delete/'+id)
      .then(response => { 
          console.log(response.data)
       
        })
      .catch(e=>{
          console.log(e)
      });

    }

export default Conferences;