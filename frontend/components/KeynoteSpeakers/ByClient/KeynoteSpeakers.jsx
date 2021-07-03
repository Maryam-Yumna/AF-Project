import React , {useEffect , useState} from 'react';
//import axios from "axios";
import KeynoteBack from 'url:../../../public/images/keynoteback.jpg';

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


    return <div className="bg-secondary">

    <div className= "container bg-dark bg-gradient text-white">
        <img src= {KeynoteBack} style={{width: '100%' , backgroundSize: 'cover'}}/>
        <br/>
        {inputs.map(input =>
            <div align="center"><br/>
                <h3 class="fw-bold">{input.keynoteName}</h3><br/>
                <p class="fw-light">{input.organization}</p>
                <p class="fw-light">{input.description}</p>
                 <br/><br/>
            </div>
        )}
    </div>
    </div>
}

export default KeynoteSpeakers;