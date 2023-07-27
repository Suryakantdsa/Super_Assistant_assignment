import React, { useState } from "react";
import ClozeQuestion from "./ClozeQuestion";
import CategorizeQuestion from "./CategorizeQuestion";
import ComprehensiveQuestion from "./ComprehensiveQuestion";

const Questions = ({ questions }) => {
  console.log(questions)
  if( questions.length<0) return null

  return (
    <div>
      {(questions.map((question, index) => (
            question.type==="Categorize"?<CategorizeQuestion key={index}/>:question.type==="Comprehensive"?<ComprehensiveQuestion key={index}/>:<ClozeQuestion key={index}/>
          )))
        }
    </div>
  );
};

export default Questions;
