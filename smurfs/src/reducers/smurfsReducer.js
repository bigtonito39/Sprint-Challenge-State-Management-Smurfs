const initialState = {
    name:"",
    age:"",
    height:"",
    id:"",
    loading: false,
};

export const smurfsReducer = (state = initialState, action) =>{
 
    switch (action.type) {
        case "LOADING":
         return {...state, loading:true}
     case "NEW_SMURF":
         return {...state, name:action.payload[0].name,age:action.payload[0].age,height:action.payload[0].height, loading:false}
             default:
             return state;
         
    }


}