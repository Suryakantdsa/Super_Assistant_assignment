import { createSlice } from "@reduxjs/toolkit";


const ClozeQuestionSlice=createSlice({
    name:"ClozeQuestion",
    initialState:{
        type: "cloze",
        Imgurl: "",
        sentence:"",
        previewSentence:"",
        correctAns:[],
        otherAns:[]
    }
    ,
    reducers:{
        addSentence:(store,action)=>{
            store.sentence=action.payload
        },
        addpreviewSentence:(store,action)=>{
            store.previewSentence=action.payload
        },
        addCorrectAns:(store,action)=>{
            store.correctAns.push(action.payload)
        },
        addAnswers:(store,action)=>{
            store.otherAns.push(action.payload)
        }
        
    }
})

export const {addSentence,addCorrectAns,addAnswers,addpreviewSentence}=ClozeQuestionSlice.actions

export default ClozeQuestionSlice.reducer