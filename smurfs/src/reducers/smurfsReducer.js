const initialState = {

}

export const smurfsReducer = (state = initialState, action) =>{
    switch (action.type) {
     case "NEW_SMURF":
         console.log(action.payload);
         default:
             return state;
         
    }


}