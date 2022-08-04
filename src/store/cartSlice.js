const { createSlice } = require("@reduxjs/toolkit")


const cartSlice =createSlice({
    name: "cart",
    initialState:[],   
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            state = state.filter(item =>item._id !== action.payload)

        }
    }
})
export const {add, remove} =cartSlice.actions;
export default cartSlice.reducer;