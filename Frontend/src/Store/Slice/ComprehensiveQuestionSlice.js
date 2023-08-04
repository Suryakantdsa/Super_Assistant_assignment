import { createSlice } from "@reduxjs/toolkit";

const ComprehensiveQuestionSlice = createSlice({
  name: "ComprehensiveQuestion",
  initialState: {
    type: "Comprehension",
    Imgurl: "",
    paragraph: "",
    questions: [],
    qus: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctOption: "",
  },
  reducers: {
    addPara: (store, action) => {
      store.paragraph = action.payload;
    },
    addQuestions: (store, action) => {
      store.questions.push(action.payload);
    },
    addQus: (store, action) => {
      store.qus = action.payload;
    },
    addOp1: (store, action) => {
      store.option1 = action.payload;
    },
    addOp2: (store, action) => {
      store.option2 = action.payload;
    },
    addOp3: (store, action) => {
      store.option3 = action.payload;
    },
    addOp4: (store, action) => {
      store.option4 = action.payload;
    },
    addCorrectOption: (store, action) => {
      store.correctOption = action.payload;
    },
  },
});

export const {
  addPara,
  addQuestions,
  addQus,
  addOp1,
  addOp2,
  addOp3,
  addOp4,
  addCorrectOption,
  add,
} = ComprehensiveQuestionSlice.actions;

export default ComprehensiveQuestionSlice.reducer
