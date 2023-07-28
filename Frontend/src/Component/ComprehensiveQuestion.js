import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComprehensiveQuestion } from "../Store/Slice/formSlice";
import { useCloudinaryUpload } from "../Helper/useCloudinaryUpload";

const ComprehensiveQuestion = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newOptions, setNewOptions] = useState(["", "", "", ""]);
  const dispatch=useDispatch()

  const handleAddQuestion = () => {
    if (newQuestion.trim() !== "") {
      const newQuestionObject = {
        question: newQuestion,
        options: newOptions.filter((option) => option.trim() !== ""),
      };
      console.log(questions);
      setQuestions([...questions, newQuestionObject]);
      setNewQuestion("");
      setNewOptions(["", "", "", ""]);
    }
  };
  const handleDispatchAction = async() => {
    try {
      const cdnUrl = await useCloudinaryUpload(image);
      console.log(cdnUrl); 
      dispatch(addComprehensiveQuestion({
        para:{
          content:content,
          imgUrl:cdnUrl
        },
        questions:questions
      }))
      alert("question data is added👍👍");
    } catch (error) {
      console.log(error);
    }
    
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (index, option) => {
    const updatedOptions = [...newOptions];
    updatedOptions[index] = option;
    setNewOptions(updatedOptions);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Comprehensive Type Question
      </h2>
      <div className="mb-4">
        <label htmlFor="content" className="text-lg font-semibold">
          Text Content:
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded-lg "
          rows={6}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="text-lg font-semibold">
          Add Image:
        </label>
        <input
          type="file"
          id="image"
          onChange={(e) => {
            const file = e.target.files[0];
            setImage(file);
          }}
        />
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Question Image"
            className="w-full h-40 object-cover rounded-lg mt-2"
          />
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="newQuestion" className="text-lg font-semibold">
          Add Question:
        </label>
        <input
          type="text"
          id="newQuestion"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        {newOptions.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
            className="w-full p-2 border rounded-lg mt-2"
          />
        ))}
        <button
          onClick={handleAddQuestion}
          className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Add Question
        </button>
      </div>
      {questions.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold">Questions:</h3>
          <ul>
            {questions.map((q, index) => (
              <li key={index} className="flex flex-col items-start mb-4">
                <span className="font-semibold">{q.question}</span>
                {q.options.map((option, i) => (
                  <div key={i} className="flex items-center mt-2">
                    <input
                      type="radio"
                      name={`question_${index}`}
                      value={option}
                    />
                    <span className="ml-2">{option}</span>
                  </div>
                ))}
                <button
                  onClick={() => handleRemoveQuestion(index)}
                  className="mt-2 text-red-500 hover:text-red-600"
                >
                  Remove Question
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleDispatchAction()}
            className="mt-4 px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded-sm"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default ComprehensiveQuestion;
