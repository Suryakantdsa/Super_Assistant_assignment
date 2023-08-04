import { createSlice } from "@reduxjs/toolkit";


const AllQuestionsSlice=createSlice({
    name:"AllQuestions",
    initialState:[],
    reducers:
    {
        addQuestionType:(store,action)=>{
            store.push(action.payload)
        }
    }

})
export const {addQuestionType} =AllQuestionsSlice.actions
export default AllQuestionsSlice.reducer