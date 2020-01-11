import axios from "axios";

export const getSmurfs = () => {
   return dispatch => {
        axios
       .get("http://localhost:3333/smurfs")
       .then( res => {
           dispatch({type: "NEW_SMURF", payload: res.data})
       })
       .catch(err => console.log("ERROR", err))
   }

}


