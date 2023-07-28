import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategorizeQuestion } from "../Store/Slice/formSlice";

const CategorizeQuestion = () => {
  const [category, setCategory] = useState("");
  const [matchingAnswer, setMatchingAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const dispatch = useDispatch();
  

  const handleAddAnswer = () => {
    if (category.trim() !== "" && matchingAnswer.trim() !== "") {
      setAnswers([...answers, { category, matchingAnswer }]);
      setCategory("");
      setMatchingAnswer("");
    } else {
      alert("All fields are required");
    }
  };

  const handleRemoveAnswer = (index) => {
    const updatedAnswers = answers.filter((_, i) => i !== index);
    setAnswers(updatedAnswers);
  };

  const handleDispatchAction = () => {
    answers.forEach((answer) => {
      dispatch(
        addCategorizeQuestion({
          category: answer.category,
          matchingAnswer: answer.matchingAnswer,
        })
      );
    });
    alert("Categorize question data is added to the store.");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 mt-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Categorize Type Question
      </h2>
      <div className="mb-4">
        <label htmlFor="category" className="text-lg font-semibold">
          Category:
        </label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="matchingAnswer" className="text-lg font-semibold">
          Matching Answer:
        </label>
        <input
          type="text"
          id="matchingAnswer"
          value={matchingAnswer}
          onChange={(e) => setMatchingAnswer(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={handleAddAnswer}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Add Answer
        </button>
      </div>
      {answers.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold">Answers:</h3>
          <ul>
            {answers.map((answer, index) => (
              <li key={index} className="flex items-center">
                <span>{answer.category} - {answer.matchingAnswer}</span>
                <button
                  onClick={() => handleRemoveAnswer(index)}
                  className="ml-2 text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button
              onClick={handleDispatchAction}
              className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorizeQuestion;
