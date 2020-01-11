import React from "react";
import  {connect} from "react-redux";
import { getSmurfs } from "../actions/index";

function smurf (props) {
console.log(props)
    return ( 
    <div>
        {props.loading ? (
        <h1>Get Your Smurfs Here!</h1>
      ) : ("hello"
        /*<h1>{`name: ${props.name}`}</h1>)
        (<h2>{`age: ${props.age}`}</h2>)
        (<h3>{`height: ${props.height}`}</h3>*/)

      }
     <button onClick={props.getSmurfs()}> Click to get your smurfs</button>

      
    </div>)
}

const mapStateToProps = state => {
    return {name: state.name, age: state.age, height:state.height, id: state.id, loading:state.loading}
}
export default connect(mapStateToProps, {getSmurfs}) (smurf);