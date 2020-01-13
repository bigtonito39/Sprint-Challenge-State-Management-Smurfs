import axios from "axios";

export const getSmurfs = () => {
   return dispatch => {
      dispatch({type: "LOADING"}) 
        axios
       .get("http://localhost:3333/smurfs")
       .then( res => {
            
                      //Just do map to start showign names...
           dispatch({type: "NEW_SMURF", payload: res.data/*res.data.map( data => {
               return {name:data.name,
               age:data.age,
               height:data.height,
               id:data.id,
               loading: false }
           })*/})
       })
       .catch(err => console.log("ERROR", err))
   }

}


