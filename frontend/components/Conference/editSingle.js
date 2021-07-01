
import React ,{useState,useEffect}from 'react'

import axios from 'axios';

let EditSingle=(props)=>{

    const intialState ={
        'confName' :'',
        'startingDate':'',
        'year':'',
        'endDate':'',
        'description':'',
         'venue':'',
         'RegistrationOpen':'',
        'RegistrationClosed':'',
        'paperSubmitionOpen':'',
       'paperSubmitionClose':'',
       'workshopSubmitionOpen':'',
        'workshopSubmitionClose':'',
        'status':'',
       

   }
   const [gotData,setTrue] =useState(false);
   const [item, setItem] = useState(intialState);
   useEffect(()=>{
    axios.get('http://localhost:8070/conferenceAPi/findbyId/'+props.match.params.id)
    .then(res=>{
        setItem(res.data)
        
        setTrue(true);
        

    }).catch(e=>{
        console.log(e)

    })
},[props.match.params.id]);

const handleName = e =>{
    let newItem ={ ...item}

    newItem.confName = e.target.value;
    setItem(newItem); 
}

const handleYear = e =>{
    let newItem ={ ...item}

    newItem.year = e.target.value;
    setItem(newItem); 
}


const handleStarignDate = e =>{
    let newItem ={ ...item}

    newItem.startingDate = e.target.value;
    setItem(newItem); 
}

const handleEndDate = e =>{
    let newItem ={ ...item}

    newItem.endDate = e.target.value;
    setItem(newItem); 
}


const handleRegOpen = e =>{
    let newItem ={ ...item}

    newItem.RegistrationOpen= e.target.value;
    setItem(newItem); 
}

const handleRegClose = e =>{
    let newItem ={ ...item}

    newItem.RegistrationClosed= e.target.value;
    setItem(newItem); 
}
const handleDescription = e =>{
    let newItem ={ ...item}

    newItem.description= e.target.value;
    setItem(newItem); 
}





const handleVenue = e =>{
    let newItem ={ ...item}

    newItem.venue= e.target.value;
    setItem(newItem); 
}


const handlePaperOpen = e =>{
    let newItem ={ ...item}

    newItem.paperSubmitionOpen= e.target.value;
    setItem(newItem); 
}


const handlePaperClose = e =>{
    let newItem ={ ...item}

    newItem.paperSubmitionClose= e.target.value;
    setItem(newItem); 
}



const handleWorkShopOpen = e =>{
    let newItem ={ ...item}

    newItem.workshopSubmitionOpen= e.target.value;
    setItem(newItem); 
}

const handleWorkShopClose = e =>{
    let newItem ={ ...item}

    newItem.workshopSubmitionClose= e.target.value;
    setItem(newItem); 
}

const handleStatus = e =>{
    let newItem ={ ...item}

    newItem.status = e.target.value;
    setItem(newItem); 
}


const updateIetm = ()=>{
    let data = {
        'confName' :item.confName,
        'startingDate':item.startingDate,
        'year':item.year,
        'endDate':item.endDate,
        'description':item.description,
         'venue':item.venue,
         'RegistrationOpen':item.RegistrationOpen,
        'RegistrationClosed':item.RegistrationClosed,
        'paperSubmitionOpen':item.paperSubmitionOpen,
       'paperSubmitionClose':item.paperSubmitionClose,
       'workshopSubmitionOpen':item.workshopSubmitionOpen,
        'workshopSubmitionClose':item.workshopSubmitionOpen,
        'status':item.status,
    }
    axios.put('http://localhost:8070/conferenceAPi/update/'+props.match.params.id,data)
         .then(function (response){
            console.log(response.data)
            alert('Student successfully updated')
         }).catch(function(er){
            console.log(er)
         })
console.log(data)
console.log(props.match.params.id)

}


    return(<div class = "bodyt">
         <div class = "formCreate">
        <div>

            {

            gotData ?(

                <div className='container'>
    
                <div className="form-wrapper">
          
                  <form onSubmit={updateIetm}>
                
                  <br/> <br/>
          <center> <h2>Edit CONFERENCE DETAILS</h2></center> 
                           
                      <label for="name">Conference Name</label>
                      <input type="text" class="form-control"  id="name" value={item.confName} placeholder="Enter conference Name"
                       onChange={handleName}/>
                     
          
                    <div class="form-group">
                      <label for="descrition">Year</label>
                      <input type="text" class="form-control" id="description" value={item.year} placeholder="Enter year"
                       onChange={handleYear}/>
                    </div>
          
                    <div class="form-group">
                      <label for="descrition">Description</label>
                      <input type="text" class="form-control" id="description"  placeholder="Enter Description" value={item.description}
                       onChange={handleDescription}/>
                    </div>
          
                    <div class="form-group">
                      <label for="descrition">Venue</label>
                      <input type="text" class="form-control" id="description"  placeholder="Enter Description" value={item.venue}
                       onChange={handleVenue}/>
                    </div>
          
                    <div class="form-group">
                      <label for="descrition">Startig date</label>
                      <input type="date" class="form-control" id="description"  placeholder="Enter Startig date" value={item.startingDate}
                       onChange={handleStarignDate}/>
                    </div>
                    <div class="form-group">
                      <label for="descrition">End date</label>
                      <input type="date" class="form-control" id="description"  placeholder="Enter End Date" value={item.endDate}
                        onChange={handleEndDate}/>
                    </div>
                    <div class="form-group">
                      <label for="descrition">Registration open date</label>
                      <input type="date" class="form-control" id="description"  placeholder="Enter Registration open date" value={item.RegistrationOpen}
                        onChange={handleRegOpen}/>
                    </div>
                    <div class="form-group">
                      <label for="descrition">Registration close date</label>
                      <input type="date" class="form-control" id="description"  placeholder="Enter Registration close date" value={item.RegistrationClosed}
                       onChange={handleRegClose}/>
                    </div>
          
                     <div class="form-group">
                      <label for="descrition">Paper submition open date</label>
                      <input type="date" class="form-control" id="description"  placeholder="Enter Paper submition open date" value={item.paperSubmitionOpen}
                        onChange={handlePaperOpen}/>
                    </div>
                    <div class="form-group">
                      <label for="descrition">Paper submition close date</label>
                      <input type="date" class="form-control" id="description"  placeholder="Enter Paper submition close date" value={item.paperSubmitionClose}
                        onChange={handlePaperClose}/>
                    </div>
          
                    <div class="form-group">
                      <label for="descrition">work shop submition open date</label>
                      <input type="date" class="form-control" id="description"  placeholder="Enter Paper submition close date" value={item.workshopSubmitionOpen}
                       onChange={handleWorkShopOpen}/>
                    </div>
                    <div class="form-group">
                      <label for="descrition">work shop submition close date</label>
                      <input type="date" class="form-control" id="description"  placeholder="Enter Paper submition close date" value={item.workshopSubmitionClose}
                       onChange={handleWorkShopClose}/>
                    </div>
          
                    <div class="form-group">
                   
                      <input type="hidden" class="form-control" value="pending"  id="description"  placeholder="Enter Paper submition close date" value={item.status}
                    
                       onChange={handleStatus}/>
                    </div>
          
                   
                    <br/>
          <button type="submit" class="btnprimary">Update</button> </form>
                </div>
                
              </div>


                
            ):(<p></p>)
            }


</div>
        </div>
        

       
        </div>  )


}

export default EditSingle