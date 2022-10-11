import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Topic from "../Topic/Topic";
import "./Topics.js";
const Topics = () => {
  const topics = useLoaderData([]).data;
  console.log(topics);
  return (
    <div>
      <Header></Header>
      <div className="container border  mx-auto m-12"></div>
      <div className="md:flex justify-around container mx-auto gap-5">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
