import React , {useEffect , useState} from 'react';
//import axios from "axios";

function ViewKeynotes() {

    const[inputs , setInput] = useState([{
        keynoteName : "",
        organization : "",
        description : "",
        status : "",
        _id: "",
    }])

    const [updatedItem, setUpdatedItem] = useState({
        keynoteName : "",
        organization : "",
        description : "",
        status : "",
        id: "",
    });

    useEffect(() =>{
        fetch("http://localhost:8070/keynoteSpeaker/accepted").then(res =>{
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setInput(jsonRes))
    })

    function openUpdate(id) {
        //setIsPut(true);
        setUpdatedItem((prevInput) => {
            return {
                ...prevInput,
                id: id,
            };
        });
    }

    return <div className= "bg-secondary bg-gradient text-white container">
        <br/><br/><br/>
        <h2 align="center" class = "text-decoration-bolder">Keynote Speakers</h2>
        {inputs.map(input =>
            <div align="center"><br/>
                <h3 class="fw-bold">{input.keynoteName}</h3><br/>
                <p class="fw-light">{input.organization}</p>
                <p class="fw-light">{input.description}</p>
                <p class="fw-light">{input.status}</p>
                <button onClick={() => openUpdate(input._id)} className='btn btn-info fw-bolder'>Edit</button><br/><br/>
                <br/><br/><br/><br/>
            </div>
        )}
    </div>
}

export default ViewKeynotes;