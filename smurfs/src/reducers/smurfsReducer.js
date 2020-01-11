const initialState = {
    name:"",
    age:"",
    height:"",
    id:"",
    loading: false
}

export const smurfsReducer = (state = initialState, action) =>{
   
    switch (action.type) {
        case "LOADING":
         return {...state, loading:true}  
     case "NEW_SMURF":
         return [...state,{loading:!state.loading}]
       
         default:
             return state;
         
    }


}