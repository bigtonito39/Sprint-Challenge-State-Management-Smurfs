import React, {useState} from "react";
import {connect} from "react-redux";
import {addSmurf} from "../actions/index"

const SmurfForm = props=> {
    const [smurf, setSmurf] = useState({
    name:"",
    age:"",
    height:"",
     })
     console.log(smurf.name)

const handleChanges = (event) => {
    setSmurf({...smurf, [event.target.name]: event.target.value})
}
const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(smurf);
    setSmurf({
        name:"",
        age:"",
        height:""
    })
}

    return (
        <div className="form-div">
<form >
<label>Name:
<input
type="text"
name="name"
value={smurf.name}
placeholder="Enter Name"
onChange ={handleChanges}
/>
</label>
   
<label>Age:
<input
type="text"
name="age"
value={smurf.age}
placeholder="Enter Age"
onChange ={handleChanges}
/>
</label>

<label>Height:
<input
type="text"
name="height"
value={smurf.height}
placeholder="Enter Height"
onChange ={handleChanges}
/>
<button type="submit" onClick={handleSubmit}>Click to Submit Your new Smurf to API</button>
</label>

</form>
        </div>
    )
}

const mapStateToProps = state => ({
    smurfs:state.smurfs
})

export default connect (mapStateToProps, {addSmurf})(SmurfForm);

