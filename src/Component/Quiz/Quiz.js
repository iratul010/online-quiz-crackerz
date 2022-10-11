import React from "react";
import { useLoaderData } from "react-router-dom";
import McqQuestions from "../McqQuestions/McqQuestions";

const Quiz = () => {
  const questionData = useLoaderData();
  const { name, questions } = questionData.data;

  return (
    <div className="container bg-green-50 mx-auto mt-12   flex flex-col justify-center items-center">
      <div className=" p-4 ">
        <h2 className="text-2xl text-center  md:text-4xl font-bold text-green-400  ">
          <span className=" text-red-400">Quizzes Of</span> {name}
        </h2>
      </div>
      <div>
        {questions.map((mcq, index) => (
          <McqQuestions key={index} questions={mcq}></McqQuestions>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
