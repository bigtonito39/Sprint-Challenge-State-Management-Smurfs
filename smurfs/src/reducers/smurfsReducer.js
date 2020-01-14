const initialState = {
    smurfs: [{
    name: "Jose",
    age: "32",
    height: "5'10''"
    }],
    loading: false
};

export const smurfsReducer = (state = initialState, action) =>{
    console.log(initialState)
    switch (action.type) {
        case "LOADING":
         return {...state, loading:true}
     case "NEW_SMURF":
         return {...state, smurfs:action.payload, loading:false}
        
             default:
             return state;
         
    }

    /*name:action.payload[0].name,age:action.payload[0].age,height:action.payload[0].height, loading:false*/


}