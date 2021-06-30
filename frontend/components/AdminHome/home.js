import React , {Component} from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router-dom'

class AdminHome extends Component{
    constructor(props){
        super(props);
    }

render() {
    return (
        <div>

<button type="submit" class="btn btn-primary"><Link to={"/createConference"} className="col btn ps-4 pe-4" style={{color:"white"}}>Admin</Link></button>
 <button type="submit" class="btn btn-primary"><Link to={"/approveall"} className="col btn ps-4 pe-4" style={{color:"white"}}>Editor</Link></button>
 </div>
    )
}
}

export default AdminHome;