import React , {useEffect , useState} from 'react';
//import axios from "axios";

function KeynoteSpeakers() {
    const[inputs , setInput] = useState([{
        keynoteName : "",
        organization : "",
        description : "",
        status : "",
    }])

    useEffect(() =>{
        fetch("http://localhost:8070/keynoteSpeaker/accepted").then(res =>{
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setInput(jsonRes))
    })


    return <div className= "container">
        <br/>
        <h2 align="center" class = "text-decoration-bolder">Keynote Speakers</h2>
        {inputs.map(input =>
            <div align="center"><br/>
                <h3 class="fw-bold">{input.keynoteName}</h3><br/>
                <p class="fw-light">{input.organization}</p>
                <p class="fw-light">{input.description}</p>
                <p class="fw-light">{input.status}</p>
                 <br/><br/><br/><br/>
            </div>
        )}
    </div>
}

export default KeynoteSpeakers;