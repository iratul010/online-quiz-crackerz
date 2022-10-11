import React from "react";
import { Link } from "react-router-dom";

const Topic = (topic) => {
  const { id, name, logo, total } = topic.topic;

  return (
    <div className="m-4 bg-slate-100  text-white rounded border hover:shadow transition-shadow">
      <div className="w-[270px] h-[270px]  mx-auto items-center">
        <img src={logo} alt={name} />
      </div>
      <div className="flex justify-between bg-white  items-center p-5 md:p-3 text-green-500 ">
        <h2>{name}</h2>
        <p>{total}</p>
        <Link to={`/quiz/${id}`}>
          <button className="btn   bg-green-400 ">
            <span>Start Practice</span>{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Topic;
