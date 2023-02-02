import { createSlice } from "@reduxjs/toolkit";

export const todoSlice=createSlice({
    name:"todos",
    initialState:['hello'],
    reducers:{
        addToDo:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addToDo}=todoSlice.actions

export default todoSlice.reducer;