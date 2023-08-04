import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addQuestionType } from '../Store/Slice/AllQuestionsSlice';

const Addbutton = () => {
  const [isClick, setClick] = useState(false);
    const dispatch=useDispatch()
  return (
    <div className="w-1/12">
    <div className="flex flex-col items-start pl-4">
      <button onClick={() => setClick(true)}>
        <i className="text-3xl pt-4 fa-solid fa-circle-plus"></i>
      </button>
      {isClick && (
        <>
          <button
            className="border shadow px-2 bg-blue-600 py-1 my-1 text-white font-bold rounded-md"
            onClick={() => {
              setClick(false);
                dispatch(addQuestionType({type:"cloze"}))
            }}
          >
            Cloze
          </button>
          <button
            className="border shadow px-2 bg-blue-600 py-1 my-1 text-white font-bold rounded-md"
            onClick={() => {
              setClick(false);
              dispatch(addQuestionType({type:"comprehension"}))

            }}
          >
            Comprehension
          </button>
          <button
            className="border shadow px-2 bg-blue-600 py-1 my-1 text-white font-bold rounded-md"
            onClick={() => {
              setClick(false);
              dispatch(addQuestionType({type:"category"}))

            }}
          >
            Categoty
          </button>
        </>
      )}
    </div>
  </div>
  )
}

export default Addbutton