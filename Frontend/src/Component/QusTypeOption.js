import React, { useRef, useState } from "react";
import Questions from "./Questions";
import SubmitAndPreview from "./SubmitAndPreview";

const QusTypeOption = () => {
  const [isOption, setOption] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const [questions, setQuestions] = useState([]);

  function handleOptionChoosed(optionChoosed) {
    setQuestions(prevQuestions => [
      ...prevQuestions,
      { type: optionChoosed, content: `this is ${optionChoosed}` },
    ]);
    setOption(false);
  }
  console.log(questions.length>0)
  function handleChooseQustype() {
    setOption(true)
    setSubmit(true)
  }

  return (
    <div   className="max-w-md mx-auto flex justify-center flex-col bg-white rounded-lg shadow-lg p-4 mt-4">
      {questions.length>0 &&<Questions questions={questions} />}
      {isOption && (
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Choose Question Type:
          </h2>
          <div className="grid grid-cols-1 gap-3">
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
      ) }
        <div className="max-w-md flex justify-center mt-2 ">
          <button
            className="p-2 rounded-lg shadow-lg bg-green-500 hover:bg-green-600 text-white font-bold flex items-center"
            onClick={()=>handleChooseQustype()}
          >
            ADD question <i className="fa-solid fa-plus ml-2"></i>
          </button>
        </div>
        {isSubmit && <SubmitAndPreview/>}
    </div>
  );
};

export default QusTypeOption;
