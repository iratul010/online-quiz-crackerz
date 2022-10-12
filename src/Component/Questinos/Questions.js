import React from "react";

const Questions = (q) => {
  const { question, answer } = q.q;
  return (
    <div className="collapse text-start border">
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-2xl font-semibold text-red-400">{question}</div>
      <div className="collapse-content  peer-checked:">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Questions;
