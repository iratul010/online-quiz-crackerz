import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const Statistics = () => {
  const userData = useLoaderData().data;
  console.log(userData);

  return (
    <div className="container mx-auto bg-green-50 mt-12">
      <h2>statistics</h2>
    </div>
  );
};

export default Statistics;
