import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCatagories,
  addDescription,
} from "../Store/Slice/CategorizeQuestionSlice";
import DraggableCategory from "./DraggableCategory.js";

const CategorizeQuestion = () => {
  const data = useSelector((store) => store.CategorizeQuestion);
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      dispatch(addCatagories(newCategory));
      setNewCategory("");
    }
  };
  const moveCategory = (fromIndex, toIndex) => {
    const updatedCategories = [...data.categories];
    const [category] = updatedCategories.splice(fromIndex, 1);
    updatedCategories.splice(toIndex, 0, category);
    dispatch(addCatagories(updatedCategories));
  };

  return (
    <div>
        <div className=" flex font-bold justify-between items-center mb-2">
            <h1>Question 1</h1>
        <h1 className="font-bold text-center bg-blue-400 text-white w-1/4 rounded-md py-1 cursor-pointer">Categorize{" "}
        <i className="fa-regular fa-circle-question"></i>
        </h1>
        </div>
      <input
      className="w-5/6 px-2 py-1 border shadow mb-2"
        type="text"
        placeholder="Description (optional)"
        onChange={(e) => {
          dispatch(addDescription(e.target.value));
        }}
        value={data?.description}
      />
      <div>
        <h1 className="font-bold mb-2">Categories</h1>
        <ul>
          {data.categories.map((category, index) => (
            <DraggableCategory
              key={index + category}
              category={category}
              index={index}
              moveCategory={moveCategory}
            />
          ))}
          <li className="border flex h-[2rem] justify-start items-center mb-2">
            <input
              type="text"
              className="h-full w-1/2 px-2 border-none outline-none"
              placeholder="Category optional"
              onChange={(e) => setNewCategory(e.target.value)}
              value={newCategory}
            />
            <button
              onClick={handleAddCategory}
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

export default CategorizeQuestion;
