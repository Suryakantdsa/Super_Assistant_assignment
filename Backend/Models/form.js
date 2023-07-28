const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [optionSchema],
    required: true,
  },
});

const paraSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  imgUrl: String,
});

const comprehensiveQuestionSchema = new mongoose.Schema({
  para: {
    type: paraSchema,
    required: true,
  },
  questions: {
    type: [questionSchema],
    required: true,
  },
});

const clozeQuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
});

const categorizeQuestionSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  matchingAnswers: {
    type: [String],
    required: true,
  },
});

const formSchema = new mongoose.Schema({
    HeaderImg:{
        type:String
    },
    headerName:{
        type:String
    },
  ComprehensiveQuestion: {
    type: [comprehensiveQuestionSchema],
    default: [],
  },
  ClozeQuestion: {
    type: [clozeQuestionSchema],
    default: [],
  },
  CategorizeQuestion: {
    type: [categorizeQuestionSchema],
    default: [],
  },
});

const Form = mongoose.model('forms', formSchema);

module.exports = Form;
