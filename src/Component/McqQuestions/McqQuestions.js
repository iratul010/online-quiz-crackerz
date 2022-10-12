import React, { createContext, useState } from "react";
import Mcq from "../Mcq/Mcq";

//1st word should be Big  for Context API
export const ColorContext = createContext("");
const McqQuestions = (mcq) => {
  const [set, setSet] = useState(true);
  const { correctAnswer, id, options, question } = mcq.questions;
  const answer = () => {
    setSet(!set);
  };
  return (
    <ColorContext.Provider value={`bg-green-50`}>
      <div className="  bg-white m-5 relative p-4">
        <span className="absolute top-1 right-2 " onClick={() => answer()}>
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </span>
        <div className="">
          <p className="p-5 md:text-2xl">{question.replace(/(<([^>]+)>)/gi, " ")}</p>
        </div>
        <div className="p-3 md:grid md:grid-cols-2 gap-4 border-solid rounded">
          {options.map((option, index) => (
            <Mcq key={index} option={option} answer={answer} correctAnswer={correctAnswer}></Mcq>
          ))}
        </div>
        <div className={`${set ? "hidden" : "visible"}`}>
          <p>{correctAnswer}</p>
        </div>
      </div>
    </ColorContext.Provider>
  );
};

export default McqQuestions;
