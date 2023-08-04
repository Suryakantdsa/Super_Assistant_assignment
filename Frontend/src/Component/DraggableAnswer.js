import React, { useState } from "react";
import {  useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { addCatagorieWithsAns } from "../Store/Slice/CategorizeQuestionSlice";

const DraggableAnswer = ({ ans, index, moveAns }) => {
  const catagories = useSelector(
    (store) => store.CategorizeQuestion.categories
  );
  const datam = useSelector(
    (store) => store.CategorizeQuestion.catagoriesWithAns
  );
  console.log(datam);
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);
    console.log(newSelectedOption)
    dispatch(addCatagorieWithsAns({ category: newSelectedOption, ans: [ans] }));
   
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ans",
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop({
    accept: "ans",
    hover: (item) => {
      if (item.index !== index) {
        moveAns(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <li
      ref={(node) => drag(drop(node))}
      key={index}
      className={`border flex h-[2rem] items-center p-2 w-2/3 mb-2 ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <i className="fa-solid fa-grip bg-white p-1"></i> 
      <span className=' border shadow w-1/3 pl-1 text-left bg-white mx-2'>{ans}</span>
      <i className="fa-solid fa-xmark pr-2"></i>
      <select value={selectedOption} onChange={handleOptionChange} className="outline-none border-none">
        <option value="">Choose a catagory</option>
        {catagories?.map((option, id) => (
          <option key={id + option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </li>
  );
};

export default DraggableAnswer;
