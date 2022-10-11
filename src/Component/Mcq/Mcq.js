import React, { useState } from "react";

import { toast } from "react-toastify";

const Mcq = (mcq) => {
  const [correct, setCorrect] = useState("");

  const { option, correctAnswer } = mcq;
  let opt = false;

  const notify = () => toast("Your Answer is Correct!");
  const checker = (option) => {
    if (option === correctAnswer) {
      setCorrect("bg-green-600") || notify();
    } else {
      setCorrect("bg-red-600");
    }
  };
  return (
    <div onClick={() => checker(option)} className="flex border  items-center h-[70px] m-3 md:m-0  bg-green-50">
      <div className="flex-none">
        <div className={`w-3 h-3 m-3 border rounded ${opt ? "bg-green-50" : correct} `}></div>
      </div>
      <div className="flex-initial m-3 ">{option}</div>
    </div>
  );
};

export default Mcq;
