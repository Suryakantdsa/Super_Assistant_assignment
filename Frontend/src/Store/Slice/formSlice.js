import { createSlice } from "@reduxjs/toolkit";

const formSlice=createSlice({
    name:"form",
    initialState:{
        ComprehensiveQuestion:[],
        ClozeQuestion:[],
        CategorizeQuestion:[]
    },
    reducers:{
        addComprehensiveQuestion:(state,action)=>{
            state.ComprehensiveQuestion.push(action.payload)
        },
        addClozeQuestion:(state,action)=>{
            state.ClozeQuestion.push(action.payload)
        },
        addCategorizeQuestion:(state,action)=>{
            state.CategorizeQuestion.push(action.payload)
        },
        removeClozeQuestion:(state,action)=>{
            
            state.ClozeQuestion.pop();
        }
    }
})

export const {addCategorizeQuestion,addClozeQuestion,addComprehensiveQuestion ,removeClozeQuestion}=formSlice.actions


export default formSlice.reducer;