import React, { useState } from "react";

const CategorizeQuestion = () => {
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");
  const [answers, setAnswers] = useState([]);

  const handleAddAnswer = () => {
    console.log(answers)
    if (category1.trim() !== "" && category2.trim() !== "") {
      setAnswers([...answers, { category1, category2 }]);
      setCategory1("");
      setCategory2("");
    }
  };

  const handleRemoveAnswer = (index) => {
    const updatedAnswers = answers.filter((_, i) => i !== index);
    setAnswers(updatedAnswers);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 mt-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Categorize Type Question
      </h2>
      <div className="mb-4">
        <label htmlFor="category1" className="text-lg font-semibold">
          Category 1:
        </label>
        <input
          type="text"
          id="category1"
          value={category1}
          onChange={(e) => setCategory1(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category2" className="text-lg font-semibold">
          Category 2:
        </label>
        <input
          type="text"
          id="category2"
          value={category2}
          onChange={(e) => setCategory2(e.target.value)}
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
                <span>{answer.category1} - {answer.category2}</span>
                <button
                  onClick={() => handleRemoveAnswer(index)}
                  className="ml-2 text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategorizeQuestion;
