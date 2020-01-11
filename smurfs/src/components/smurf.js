import React from "react";
import  {connect} from "react-redux";
import { getSmurfs } from "../actions/index";

function smurf (props) {
console.log(props.name)
    return ( 
    <div>
        {props.loading ? (
        <h1>Loading...</h1>
      ) : 
      <h1>{`Name: ${props.name} / Age: ${props.age} / height: ${props.height}`}</h1>
        
      }
     <button onClick={ ()=> {
         props.getSmurfs()
     }}> Click to get your smurfs</button>

      
    </div>)
}

const mapStateToProps = state => {
    return {name: state.name, age: state.age, height:state.height, id: state.id, loading:state.loading}
}
export default connect(mapStateToProps, {getSmurfs}) (smurf);