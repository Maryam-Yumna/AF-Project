import React,{useState}  from "react"
import axios from "axios"


export default function AddConference(){


  const[confName,setconfName] = useState("");
  const[year,setyear] = useState("");
  const[startingDate,setstartingDate] = useState("");
  const[endDate,setendDate] = useState("");
  const[description,setdescription] = useState("");
  const[venue,setvenue] = useState("");
  const[RegistrationOpen,setRegistrationOpen] = useState("");
  const[RegistrationClosed,setRegistrationClosed] = useState("");
  const[paperSubmitionOpen,setpaperSubmitionOpen] = useState("");
  const[paperSubmitionClose,setpaperSubmitionClose] = useState("");
  const[workshopSubmitionOpen,setworkshopSubmitionOpen] = useState("");
  
  const[workshopSubmitionClose,setworkshopSubmitionClose] = useState("");
  const[status,setstatus] = useState("pending");

//function to set data
async function  sentData(e){
  e.preventDefault();


   const newConference ={
    confName,
    startingDate,
    year,
    endDate,
    description,
     venue,
     RegistrationOpen,
    RegistrationClosed,
    paperSubmitionOpen,
   paperSubmitionClose,
   workshopSubmitionOpen,
    workshopSubmitionClose,
    status
        
    }
    
    // axios.post("http://localhost:8070/conferenceApi/create",newConference).then(()=>{
    //     alert("conference added")
    //   }).catch(error => {
    //     console.log(error.message);
    //     alert(error.message);
    //   })}


    try{

       let result = await  axios.post('http://localhost:8070/conferenceApi/create',newConference);
       alert('Conference Added')

    }catch(err){

      console.log(err)
      console.log(err.response.data)

    }
  }
     

  return (

    <div className='container'>

       <form onSubmit={sentData}>

          <center> <h2>ADD CONFERENCE DETAILS</h2></center> 

          <div class="form-group">
            <label for="name">Conference Name</label>
            <input type="text" class="form-control" id="name"  placeholder="Enter conference Name"
            onChange={(e)=>{setconfName(e.target.value) }}/>
            </div>

          <div class="form-group">
            <label for="descrition">Year</label>
            <input type="text" class="form-control" id="description"  placeholder="Enter year"
             onChange={(e)=>{
                setyear(e.target.value)}}/>
          </div>

          <div class="form-group">
            <label for="descrition">Description</label>
            <input type="text" class="form-control" id="description"  placeholder="Enter Description"
             onChange={(e)=>{
                setdescription(e.target.value)}}/>
          </div>

          <div class="form-group">
            <label for="descrition">Venue</label>
            <input type="text" class="form-control" id="description"  placeholder="Enter Description"
             onChange={(e)=>{
                setvenue(e.target.value)}}/>
          </div>

          <div class="form-group">
            <label for="descrition">Startig date</label>
            <input type="date" class="form-control" id="description"  placeholder="Enter Startig date"
             onChange={(e)=>{
                setstartingDate(e.target.value)}}/>
          </div>
          <div class="form-group">
            <label for="descrition">End date</label>
            <input type="date" class="form-control" id="description"  placeholder="Enter End Date"
             onChange={(e)=>{
                setendDate(e.target.value)}}/>
          </div>
          <div class="form-group">
            <label for="descrition">Registration open date</label>
            <input type="date" class="form-control" id="description"  placeholder="Enter Registration open date"
             onChange={(e)=>{
                setRegistrationOpen(e.target.value)}}/>
          </div>
          <div class="form-group">
            <label for="descrition">Registration close date</label>
            <input type="date" class="form-control" id="description"  placeholder="Enter Registration close date"
             onChange={(e)=>{
                setRegistrationClosed(e.target.value)}}/>
          </div>

           <div class="form-group">
            <label for="descrition">Paper submition open date</label>
            <input type="date" class="form-control" id="description"  placeholder="Enter Paper submition open date"
             onChange={(e)=>{
                setpaperSubmitionOpen(e.target.value)}}/>
          </div>
          <div class="form-group">
            <label for="descrition">Paper submition close date</label>
            <input type="date" class="form-control" id="description"  placeholder="Enter Paper submition close date"
             onChange={(e)=>{
                setpaperSubmitionClose(e.target.value)}}/>
          </div>

          <div class="form-group">
            <label for="descrition">work shop submition open date</label>
            <input type="date" class="form-control" id="description"  placeholder="Enter Paper submition close date"
             onChange={(e)=>{
                setworkshopSubmitionOpen(e.target.value)}}/>
          </div>
          <div class="form-group">
            <label for="descrition">work shop submition close date</label>
            <input type="date" class="form-control" id="description"  placeholder="Enter Paper submition close date"
             onChange={(e)=>{
                setworkshopSubmitionClose(e.target.value)}}/>
          </div>

          <div class="form-group">
         
            <input type="hidden" class="form-control" value="pending"  id="description"  placeholder="Enter Paper submition close date"
             onChange={(e)=>{
                setstatus(e.target.value)}}/>
          </div>

         

          <br/>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>



      </div>
       )
  
}