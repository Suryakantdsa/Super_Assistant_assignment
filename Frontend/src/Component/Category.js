import React, { useState } from "react";
import CategorizeQuestion from "./CategorizeQuestion";
import CatagoryAns from "./CatagoryAns";
import Addbutton from "./Addbutton";

const Category = () => {
  return (
    <div className="flex max-w-xl my-2 mx-auto justify-around">
      <div className="w-11/12 border border-l-8 py-10 px-4 bg-slate-100 shadow-md border-blue-500">
        <CategorizeQuestion />
        <CatagoryAns />
      </div>
      <Addbutton/>
    </div>
  );
};

export default Category;
