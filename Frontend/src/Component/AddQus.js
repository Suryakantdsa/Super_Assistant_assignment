import React, { useState } from "react";
import QusTypeOption from "./QusTypeOption";

const AddQus = () => {
    const [isQusType,setType]=useState(false)
    function handleChooseQustype(){
        setType(!isQusType)
    }
  return (
    <>
    {isQusType&& <QusTypeOption/>}
    <div className="max-w-md mx-auto flex justify-center bg-white rounded-lg shadow-lg p-4">
      <div className="max-w-md ">
        <button className="p-3 rounded-lg shadow-lg bg-green-500 hover:bg-green-600 text-white font-bold flex items-center" onClick={handleChooseQustype}>
          ADD question <i className="fa-solid fa-plus ml-2"></i>
        </button>
      </div>
    </div>
    
    </>
  );
};

export default AddQus;
