import { configureStore } from "@reduxjs/toolkit";
import CategorizeQuestionSlice from "./Slice/CategorizeQuestionSlice";
import ClozeQuestionSlice from "./Slice/ClozeQuestionSlice";
import ComprehensiveQuestionSlice from "./Slice/ComprehensiveQuestionSlice";
import AllQuestionsSlice from "./Slice/AllQuestionsSlice";


const store=configureStore({
    reducer:{
        CategorizeQuestion:CategorizeQuestionSlice,
        ClozeQuestion:ClozeQuestionSlice,
        ComprehensiveQuestion:ComprehensiveQuestionSlice,
        AllQuestions:AllQuestionsSlice

    }
})

export default store;