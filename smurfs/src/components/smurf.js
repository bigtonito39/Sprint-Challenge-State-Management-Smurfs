import React from "react";
import  {connect} from "react-redux";


function smurf (props) {
console.log(props)
    return ( <div>

    </div>)
}

const mapStateToProps = state => {
    return {name: state.name, age: state.age, height:state.height, id: state.id }
}
export default connect(mapStateToProps) (smurf);