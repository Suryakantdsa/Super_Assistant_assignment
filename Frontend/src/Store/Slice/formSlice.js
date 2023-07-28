import { createSlice } from "@reduxjs/toolkit";

const formSlice=createSlice({
    name:"form",
    initialState:{
        HeaderImg:"",
        headerName:"",
        ComprehensiveQuestion:[],
        ClozeQuestion:[],
        CategorizeQuestion:[]
    },
    reducers:{
        addHeaderImg:(state,action)=>{
            state.HeaderImg=(action.payload)
        },
        addHeaderName:(state,action)=>{
            state.headerName=(action.payload)
        },
        addComprehensiveQuestion:(state,action)=>{
            state.ComprehensiveQuestion.push(action.payload) 
        },
        addClozeQuestion:(state,action)=>{
            state.ClozeQuestion.push(action.payload)
        },
        addCategorizeQuestion: (state, action) => {
            const { category, matchingAnswer } = action.payload;
            const existingCategoryIndex = state.CategorizeQuestion.findIndex(
              (item) => item.category === category
            );
      
            if (existingCategoryIndex === -1) {
              state.CategorizeQuestion.push({
                category,
                matchingAnswers: [matchingAnswer],
              });
            } else {
              state.CategorizeQuestion[existingCategoryIndex].matchingAnswers.push(
                matchingAnswer
              );
            }
          },
    }
})

export const {addCategorizeQuestion,addClozeQuestion,addComprehensiveQuestion,addHeaderImg,addHeaderName ,removeClozeQuestion}=formSlice.actions


export default formSlice.reducer;