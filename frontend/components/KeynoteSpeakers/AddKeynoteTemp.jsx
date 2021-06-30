import React , {useState} from 'react';
import axios from "axios"

function AddKeynoteTemp() {

    const [input , setInput] = useState({
        photo : "",
        keynoteName : "",
        organization : "",
        description : "",
        status : "Waiting",
    })

    function handleChange(event){
        const{name , value} = event.target;

        setInput(prevInput=>{
            return{
                ...prevInput,
                [name] : value
            }
        })
    }

    function handlePhoto(event){
        setInput(prevInput=>{
            return{
                ...prevInput,
                photo: event.target.files[0]
            }
        });
    }

    function handleClick(event){
        event.preventDefault();

        //console.log(input);

        const newKeynote = {
            photo : input.photo,
            keynoteName : input.keynoteName,
            organization : input.organization,
            description : input.description,
            status : input.status
        };

        //backend post method is called
        axios.post("http://localhost:8070/keynoteSpeakerTemp", newKeynote);
        alert("Keynote Speaker is added temporary");

        setInput({
            photo : "",
            keynoteName : "",
            organization : "",
            description : "",
            status : "Waiting",
        });
    }

    return(
        <div className= 'container'>
            <br/><h1 align="center">Add a Keynote Speaker</h1><br/>
            <form>
                <div className= 'form-group'>
                    <input
                        className= "font-monospace form-control"
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        name="photo"
                        value={input.photo}
                        onChange={handlePhoto}
                    />
                </div>
                <br/>

                <div className= 'form-group'>
                    <input onChange={handleChange} className= "font-monospace form-control" name = "keynoteName" value={input.keynoteName} autoComplete="off" placeholder="Name of the Keynote Speaker" />
                </div>
                <br/>

                <div className= 'form-group' >
                    <input onChange={handleChange} className= "font-monospace form-control" name = "organization" value={input.organization} autoComplete="off" placeholder="Organization"/>
                </div>
                <br/>

                <div className= 'form-group' >
                    <textarea onChange={handleChange} className= "font-monospace form-control" name = "description" value={input.description} autoComplete="off" placeholder="Description"/>
                </div>
                <br/>

                <div className= 'form-group' >
                    <input disabled="true" onChange={handleChange} className= "font-monospace form-control" name = "status" value={input.status} autoComplete="off" placeholder="Status"/>
                </div>
                <br/>

                <button onClick={handleClick} className='btn btn-success fw-bolder' >ADD KEYNOTE SPEAKER</button>
            </form>
        </div>
    )
}

export default AddKeynoteTemp;