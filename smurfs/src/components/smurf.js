import React from "react";
import  {connect} from "react-redux";
import { getSmurfs } from "../actions/index";
import SmurfForm from "./smurfForm"


function smurf (props) {
console.log(props.smurfs)
    return ( 
    <div>
        {props.loading ? (
        <h1>Loading...</h1>
      ) : 
      props.smurfs.map(data => {
        return <h1>{`Name: ${data.name} / Age: ${data.age} / height: ${data.height}`}</h1>
      })
        
      }
     <button onClick={ (e)=> {
         e.preventDefault()
         props.getSmurfs()
     }}> Show First API Smurf</button>
<div>
   
</div>
      <SmurfForm />
    </div>)
}

const mapStateToProps = state => ({
    smurfs:state.smurfs
})
export default connect(mapStateToProps, {getSmurfs}) (smurf);