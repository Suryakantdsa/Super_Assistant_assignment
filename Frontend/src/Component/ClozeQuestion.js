import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAnswers,
  addCorrectAns,
  addSentence,
  addpreviewSentence,
} from "../Store/Slice/ClozeQuestionSlice";

const ClozeQuestion = () => {
  const [selectWord, setSelected] = useState("");
  const [otherAns, setOtherans] = useState("");
  const clozeQuestion = useSelector((store) => store.ClozeQuestion);
  const dispatch = useDispatch();
  const handleMouseUp = () => {
    const inpuField = document.getElementById("sentence");
    const selectedWord = inpuField.value.substring(
      inpuField.selectionStart,
      inpuField.selectionEnd
    );
    setSelected(selectedWord);
  };
  function handleUnderline() {
    const preview = clozeQuestion.previewSentence.replace(
      selectWord,
      " __________ "
    );
    dispatch(addpreviewSentence(preview));
    dispatch(addCorrectAns(selectWord));
  }
  return (
  
      <div>
        <h1 className="font-bold text-center ml-auto bg-blue-400 text-white w-1/4 rounded-md py-1 cursor-pointer">
          Cloze <i className="fa-regular fa-circle-question"></i>
        </h1>
        <label htmlFor="preview" className="block my-2 font-bold">
          Preview
        </label>
        <input
          type="text"
          id="preview"
          value={clozeQuestion?.previewSentence}
          className="w-full px-2 py-1 border shadow bg-white outline-none border-none"
          disabled
        />
        <label htmlFor="sentence" className="block my-2 font-bold">
          Sentence
        </label>
        <div>
          <input
            type="text"
            id="sentence"
            onMouseUp={handleMouseUp}
            className="w-5/6 px-2 py-1 border shadow bg-white outline-none border-none"
            value={clozeQuestion?.sentence}
            placeholder="Underline the words here to convert them into blank"
            onChange={(e) => {
              dispatch(addSentence(e.target.value));
              dispatch(addpreviewSentence(e.target.value));
            }}
          />
          <button onClick={handleUnderline}>
            <i className="ml-2 text-white p-[6px] bg-blue-600 fa-solid fa-underline"></i>
          </button>
        </div>
        <div className="mt-2">
          <ul>
            {clozeQuestion?.correctAns.map((option, index) => (
              <li key={index}>
                <label className="flex items-center p-1 w-1/3">
                  <input type="checkbox" className="mr-2" checked />
                  {option}
                </label>
              </li>
            ))}
            {clozeQuestion?.otherAns.map((option, index) => (
              <li key={index}>
                <label className="flex items-center p-1 w-1/3">
                  <input type="checkbox" className="mr-2" />
                  {option}
                </label>
              </li>
            ))}
            <li className="flex justify-between w-1/2 h-[2rem]">
              <label className="flex items-center bg-white h-full  w-full">
                <input type="checkbox" className="mr-2" />
                <input
                  type="text"
                  placeholder="Option"
                  value={otherAns}
                  className="w-full outline-none border-none"
                  onChange={(e) => setOtherans(e.target.value)}
                />
              </label>
              <button
                onClick={() => {
                  dispatch(addAnswers(otherAns));
                  setOtherans("");
                }}
              >
                <i className="ml-2 text-white p-[6px] bg-blue-600 fa-solid fa-plus"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
 
  );
};

export default ClozeQuestion;
