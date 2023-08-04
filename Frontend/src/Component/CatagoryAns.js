import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCatagoriesAns,} from "../Store/Slice/CategorizeQuestionSlice";
import DraggableAnswer from "./DraggableAnswer";

const CatagoryAns = () => {
  const data = useSelector((store) => store.CategorizeQuestion);
  const dispatch = useDispatch();
  const [newAns, setNewAns] = useState("");

  const handleAddCategoryAns = () => {
    if (newAns.trim() !== "") {
      dispatch(addCatagoriesAns(newAns));
      setNewAns("");
    }
  };
  const moveAns = (fromIndex, toIndex) => {
    const updatedCategoriesAns = [...data.catagoriesAns];
    const [ans] = updatedCategoriesAns.splice(fromIndex, 1);
    updatedCategoriesAns.splice(toIndex, 0, ans);
    dispatch(addCatagoriesAns(updatedCategoriesAns));
  };


  return (
    <div>
      <div>
        <ul>
            <li className=" border flex h-[2rem] w-2/3 justify-between items-center my-2 shadow-lg px-2 bg-blue-200">
                <span className="font-bold">Item</span>
                <span className="font-bold">Belongs To</span>
            </li>
        {data.catagoriesAns.map((ans, index) => (
          <DraggableAnswer
            key={index+ans}
            ans={ans}
            index={index}
            moveAns={moveAns}
          />
        ))}
          <li className="border flex h-[2rem] justify-start items-center mb-2">
            <input
              type="text"
              placeholder="Answer optional"
              className="h-full w-1/2 px-2 border-none outline-none"
              onChange={(e) => setNewAns(e.target.value)}
              value={newAns}
            />
            <button
              onClick={handleAddCategoryAns}
              className="font-bold  px-2 h-full my-auto   border shadow bg-blue-600"
            >
             <i class="fa-solid fa-plus text-white font-bold text-lg"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CatagoryAns;
