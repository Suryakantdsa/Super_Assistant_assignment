import React, { useState } from "react";
import Questions from "./Questions";

const QusTypeOption = () => {
  const [isOption, setOption] = useState(false);
  const [option, getOption] = useState("");
  const [questions, setQuestions] = useState([]);

  function handleOptionChoosed(optionChoosed) {
    setOption(true);
    getOption(optionChoosed);
    const newQuestion = {
        type: option,
        content: "",
      };
  
      setQuestions([...questions, newQuestion]);
  }

//   function handleAddQuestion() {
//     setOption(true);
//     // Create a new question object based on the selected question type
//     const newQuestion = {
//       type: option,
//       content: "Here goes the content of the new question.",
//     };

//     // Add the new question to the list of questions
//     setQuestions([...questions, newQuestion]);
//   }

  return (
    <div className="max-w-md mx-auto flex justify-center bg-white rounded-lg shadow-lg p-4 mt-4">
      {!isOption ? (
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Choose Question Type:
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <button
              className="p-3 rounded-lg shadow-lg bg-blue-500 hover:bg-blue-600 text-white font-bold"
              onClick={() => handleOptionChoosed("Categorize")}
            >
              Categorize
            </button>
            <button
              className="p-3 rounded-lg shadow-lg bg-blue-500 hover:bg-blue-600 text-white font-bold"
              onClick={() => handleOptionChoosed("Cloze")}
            >
              Cloze
            </button>
            <button
              className="p-3 rounded-lg shadow-lg bg-blue-500 hover:bg-blue-600 text-white font-bold"
              onClick={() => handleOptionChoosed("Comprehensive")}
            >
              Comprehensive
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Questions questions={questions} />
        </div>
      )}
      { isOption && 
      <div className="max-w-md mx-auto flex justify-center bg-white rounded-lg shadow-lg p-4">
            <div className="max-w-md ">
              <button
                className="p-3 rounded-lg shadow-lg bg-green-500 hover:bg-green-600 text-white font-bold flex items-center"
                onClick={()=>{setOption(false)}}
              >
                ADD question <i className="fa-solid fa-plus ml-2"></i>
              </button>
            </div>
          </div>}
    </div>
  );
};

export default QusTypeOption;
