import React, { useContext, useState } from "react";

import { toast } from "react-toastify";
import { ColorContext } from "../McqQuestions/McqQuestions";
//circle ? correct : defaultC
const Mcq = (mcq) => {
  const [correct, setCorrect] = useState("");
  const [defaultC, setDefaultC] = useState(true);
  const [count, setCount] = useState(0);
  const color = useContext(ColorContext);
  const { option, correctAnswer } = mcq;

  const notify = () => toast("Your Answer is Correct!");

  const checker = (option) => {
    setDefaultC(true);

    if (option === correctAnswer) {
      setDefaultC(false);
      setCount(count + 1);
      setCorrect("bg-green-500");
      notify();
      // circle = false;
      // setCorrect("bg-green-600") || notify();
    } else {
      setDefaultC(false);
      setCorrect("bg-red-600");
    }
  };
  return (
    <div
      onClick={() => checker(option)}
      className={`flex border rounded-lg   items-center md:h-[80px] m-3 md:m-0 bg-green-50  hover:bg-green-100`}
    >
      <div className="">
        <div className={` w-3 h-3 m-3 border rounded-full  ${defaultC ? color : correct}`}></div>
      </div>
      <div className="flex-initial m-3 ">{option}</div>
    </div>
  );
};

export default Mcq;
