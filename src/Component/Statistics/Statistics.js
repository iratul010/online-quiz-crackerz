import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const Statistics = () => {
  const userData = useLoaderData().data;
  console.log(userData);

  return (
    <div className="container mx-auto bg-green-50 mt-12 md:flex-col items-center justify-center">
      <div className="m-12 md:text-3xl">
        <h2>React,Javascript,CSS & Git Total Question Recharts</h2>
      </div>

      <div>
        <LineChart
          width={300}
          className="md:w-[600px]"
          height={300}
          data={userData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
