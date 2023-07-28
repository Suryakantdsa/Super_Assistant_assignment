import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Preview = () => {
  const form = useSelector((store) => store.form);

  if (!form || (Object.keys(form).every(key => Array.isArray(form[key]) && form[key].length === 0))) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Form Preview</h1>
        <div className="text-gray-600">No form data to display.</div>
        <div className="mt-4">
          <Link to="/" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container max-w-md mx-auto bg-white rounded-lg shadow-lg p-4 mt-4">
      <h1 className="text-3xl font-bold mb-4">Form Preview</h1>
      {form.headerName && <h2 className="font-bold text-xl mb-4 text-center">{form.headerName}</h2>}
      {form.HeaderImg && 
        <div className="header-image mb-4  ">
          <img src={form.HeaderImg} alt="Header" className="h-32 w-full" />
        </div>
      }
      <div className="preview-container">
        {form.ComprehensiveQuestion.map((comprehensiveQues, index) => (
          <div key={index} className="comprehensive-question bg-gray-200 p-4 mb-4 rounded-lg">
            <h2 className="text-lg font-bold">Comprehensive Question {index + 1}</h2>
            <p className="mt-2 mb-4">{comprehensiveQues.para.content}</p>
            <ul>
              {comprehensiveQues.questions.map((ques, qIndex) => (
                <li key={qIndex} className="ml-4 mb-2">
                  <p>{ques.question}</p>
                  <ul className="list-disc ml-6">
                    {ques.options.map((option, optionIndex) => (
                      <li key={optionIndex}>{option}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {form.ClozeQuestion.map((clozeQues, index) => (
          <div key={index} className="cloze-question bg-gray-200 p-4 mb-4 rounded-lg">
            <h2 className="text-lg font-bold">Cloze Question {index + 1}</h2>
            <p className="mt-2 mb-4">{clozeQues.questionText.replace(/@@/g, "_________")}</p>
            <ul className="list-disc ml-6">
              {clozeQues.answers.map((answer, ansIndex) => (
                <li key={ansIndex}>{answer}</li>
              ))}
            </ul>
          </div>
        ))}

        {form.CategorizeQuestion.map((categorizeQues, index) => (
          <div key={index} className="categorize-question bg-gray-200 p-4 mb-4 rounded-lg">
            <h2 className="text-lg font-bold">Categorize Question {index + 1}</h2>
            <p className="mt-2 mb-4">Category: {categorizeQues.category}</p>
            <ul className="list-disc ml-6">
              {categorizeQues.matchingAnswers.map((matchingAns, ansIndex) => (
                <li key={ansIndex}>{matchingAns}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Preview;
