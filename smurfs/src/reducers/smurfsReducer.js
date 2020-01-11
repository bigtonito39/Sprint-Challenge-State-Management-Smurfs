const initialState = {
    name: "",
    age: "",
    height: "",
    id: "",
    loading: false
}

export const smurfsReducer = (state = initialState, action) =>{
    switch (action.type) {
     case "NEW_SMURF":
         return {...state, loading:true, name:action.payload.name,age:action.payload.age,height:action.payload.height,id:action.payload.id }
         default:
             return state;
         
    }


}