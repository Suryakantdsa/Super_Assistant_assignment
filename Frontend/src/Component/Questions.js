import React from "react";

const Questions = ({ questions }) => {
  // if( questions.length>0) return null
  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mb-4">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            {question.type} Question {index + 1}
          </h1>
          <div>{question.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Questions;
