import axios from "axios";

export const getSmurfs = () => {
   return dispatch => {
      dispatch({type: "LOADING"}) 
        axios
       .get("http://localhost:3333/smurfs")
       .then( res => {
            
                      
           dispatch({type: "NEW_SMURF", payload:
           res.data.map( data => {
               return {name:data.name,
               age:data.age,
               height:data.height,
               id:data.id,
               loading: false }
           })})
       })
       .catch(err => console.log("ERROR", err))
   }

}

export const addSmurf = (incominData) => {
    return dispatch => {
       axios
       .post("http://localhost:3333/smurfs",incominData)
       .then(res => {
           console.log(res)
       })
       .catch( error => {
           console.log(error)
       })

        dispatch({type:"ADD_SMURF"})
    }
}


