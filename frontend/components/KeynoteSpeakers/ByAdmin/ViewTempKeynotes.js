import React , {useEffect , useState} from 'react';
import axios from "axios";

function ViewTempKeynotes() {

    const[inputs , setInput] = useState([{
        keynoteName : "",
        organization : "",
        description : "",
        status : "",
    }])

    useEffect(() =>{
        fetch("http://localhost:8070/keynoteSpeakerTemp").then(res =>{
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setInput(jsonRes))
    })

    function insertKeynote() {
        //insert into the original table
       axios.post("http://localhost:8070/keynoteSpeaker")
            .then(res => {
                this.setState({item: res.data});
            })
            .catch(err => console.log(err))

        //remove from the temporary table
    }

    function updateKeynoteTemp() {
        alert("Keynote Speaker is Rejected")
        //update the status as rejected
        return "Rejected";
    }

    return <div className= "container bg-secondary bg-gradient text-white" >
        <br/> <br/> <br/> <br/>
        <h2 align="center" class = "text-decoration-underline">Recommended Keynote Speakers</h2>
        {inputs.map(input =>
            <div align="center"><br/>
                <h3 class="fw-bold">{input.keynoteName}</h3><br/>
                <p class="fw-light">{input.organization}</p>
                <p class="fw-light">{input.description}</p><br/>
                <p class="fw-light">{input.status}</p><br/>
                {/*<button onClick={() => insertKeynote(input._id)}>ACCEPT</button>*/}
                {/*<button  className='btn btn-info fw-bolder'>ACCEPT</button>*/}
                <a href="/addAccepted" onClick={insertKeynote} className="btn btn-info  fw-bolder" tabIndex="-1" role="button" aria-disabled="true">
                    ACCEPT
                </a>
                <button onClick={updateKeynoteTemp} className='btn btn-dark fw-bolder'>REJECT</button>

                <br/><br/><br/><br/>
            </div>
        )}
    </div>
}

export default ViewTempKeynotes;