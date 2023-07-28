import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClozeQuestion } from "../Store/Slice/formSlice";

const ClozeQuestion = () => {
  const [questionText, setQuestionText] = useState("");
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");
  const dispatch = useDispatch();

  const handleAddAnswer = () => {
    if (newAnswer.trim() !== "") {
      setAnswers([...answers, newAnswer]);
      setNewAnswer("");
    }
  };
  function handleSubmit(e) {
    if (answers && questionText) {
      dispatch(
        addClozeQuestion({
          questionText: questionText,
          answers: answers,
        })
      );
      alert("question data is added👍👍");
    } else {
      alert("All field is required 🚫");
    }
  }

  const handleRemoveAnswer = (index) => {
    const updatedAnswers = answers.filter((_, i) => i !== index);
    setAnswers(updatedAnswers);
  };

  // Function to render the question preview with blanks replaced by "@@"
  const renderQuestionPreview = () => {
    return questionText.replace(/@@/g, "_________");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 mt-4 relative">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Cloze Type Question
      </h2>
      <div className="mb-4">
        <label htmlFor="questionText" className="text-lg font-semibold">
          Question:
        </label>
        <input
          type="text"
          id="questionText"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder='Add "@@" to make blank in question..'
          className="w-full p-2 border rounded-lg"
        />
        <p className="text-[12px] pt-2">
          <span className="text-red-600 text-base font-bold px-2">*</span>
          {renderQuestionPreview()}
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="newAnswer" className="text-lg font-semibold">
          Add Answer:
        </label>
        <input
          type="text"
          id="newAnswer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <button
          onClick={handleAddAnswer}
          className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Add Answer
        </button>
      </div>
      {answers.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold">Answers:</h3>
          <ul>
            {answers.map((answer, index) => (
              <li key={index} className="flex items-center ">
                <span>{answer}</span>
                <button
                  onClick={() => handleRemoveAnswer(index)}
                  className="ml-2 text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleSubmit()}
            className="mt-4 px-2 py-1 bg-red-500 hover:bg-green-600 text-white rounded-md"
          >
            Save 
          </button>
        </div>
      )}
    </div>
  );
};

export default ClozeQuestion;
