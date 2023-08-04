import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCorrectOption,
  addOp1,
  addOp2,
  addOp3,
  addOp4,
  addPara,
  addQuestions,
  addQus,
} from "../Store/Slice/ComprehensiveQuestionSlice";

const ComprehensiveQuestion = () => {
  const dispatch = useDispatch();
  const Comprehension = useSelector((store) => store.ComprehensiveQuestion);
  function handleADD() {
    dispatch(
      addQuestions({
        qus: Comprehension.qus,
        option: [
          Comprehension.option1,
          Comprehension.option2,
          Comprehension.option3,
          Comprehension.option4,
        ],
        correctAns: Comprehension.correctAns,
      })
    );
    dispatch(addQus(""));
    dispatch(addCorrectOption(""));
    dispatch(addOp1(""));
    dispatch(addOp2(""));
    dispatch(addOp3(""));
    dispatch(addOp4(""));
    const radioInputs = document.getElementsByName("option");
    radioInputs.forEach((input) => {
      input.checked = false;
    });
  }
  return (
  
      <div>
        <h1 className="font-bold text-center ml-auto bg-blue-400 text-white w-1/3 rounded-md py-1 cursor-pointer">
          Comprehension<i className=" pl-1 fa-regular fa-circle-question"></i>
        </h1>
        <textarea
          id="content"
          value={Comprehension.paragraph}
          onChange={(e) => dispatch(addPara(e.target.value))}
          className="w-full p-2 border-none outline-none my-2 "
          placeholder="Type the paragraph here"
          rows={6}
          style={{ resize: 'none' }} 
        />
        <h1 className="font-bold text-sm text-center mx-auto bg-blue-400 text-white w-1/6 rounded-md py-1 cursor-pointer mb-2">
          MCQ
        </h1>
        <ul>
          {Comprehension?.questions.map((question, id) => {
            return (
              <li className="flex flex-col items-start mb-4" key={id}>
                <span className="font-semibold">{question?.qus}</span>
                {question?.option.map((option, index) => (
                  <div key={index} className="flex items-center mt-2">
                    <input
                      type="radio"
                      name={`question_${index}`}
                      value={option}
                      disabled
                    />
                    <span className="ml-2">{option}</span>
                  </div>
                ))}
              </li>
            );
          })}
        </ul>

        <div className="flex">
          <input
            type="text"
            value={Comprehension.qus}
            onChange={(e) => dispatch(addQus(e.target.value))}
            placeholder="Add the question here"
            className="w-full border-none outline-none p-1 shadow"
          />
          <button onClick={handleADD}>
            <i className="ml-2 text-white p-2 bg-blue-700 fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="flex flex-col my-2 ">
          <label htmlFor="option1" className="mb-2">
            <input
              type="radio"
              id="option1"
              name="option"
              value={Comprehension.option1}
              onChange={(e) => dispatch(addCorrectOption(e.target.value))}
            />
            <input
              type="text"
              value={Comprehension.option1}
              onChange={(e) => dispatch(addOp1(e.target.value))}
              placeholder="Option1"
              className="ml-2 px-2 py-1 outline-none border-none shadow "
            />
          </label>
          <label htmlFor="option2" className="mb-2">
            <input
              type="radio"
              id="option2"
              name="option"
              value={Comprehension.option2}
              onChange={(e) => dispatch(addCorrectOption(e.target.value))}
            />
            <input
              type="text"
              value={Comprehension.option2}
              onChange={(e) => dispatch(addOp2(e.target.value))}
              placeholder="Option2"
              className="ml-2 px-2 py-1 outline-none border-none shadow "
            />
          </label>
          <label htmlFor="option3" className="mb-2">
            <input
              type="radio"
              id="option3"
              name="option"
              value={Comprehension.option3}
              onChange={(e) => dispatch(addCorrectOption(e.target.value))}
            />
            <input
              type="text"
              value={Comprehension.option3}
              onChange={(e) => dispatch(addOp3(e.target.value))}
              placeholder="Option3"
              className="ml-2 px-2 py-1 outline-none border-none shadow "
            />
          </label>
          <label htmlFor="option4" className="mb-2">
            <input
              type="radio"
              id="option4"
              name="option"
              value={Comprehension.option4}
              onChange={(e) => dispatch(addCorrectOption(e.target.value))}
            />
            <input
              type="text"
              value={Comprehension.option4}
              onChange={(e) => dispatch(addOp4(e.target.value))}
              placeholder="Option4"
              className="ml-2 px-2 py-1 outline-none border-none shadow "
            />
          </label>
        </div>
      </div>
    
  );
};

export default ComprehensiveQuestion;
