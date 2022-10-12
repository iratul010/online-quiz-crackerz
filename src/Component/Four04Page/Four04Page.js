import React from "react";

const Four04Page = () => {
  return (
    <div className="container mx-auto bg-white text-slate-700">
      <div className="m-8">
        {" "}
        <div className="flex mx-auto  justify-center items-center gap-3">
          {" "}
          <h2 className="text-3xl">Whoops, that page is Not Available </h2>{" "}
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.536-3.475a.75.75 0 001.061 0 3.5 3.5 0 014.95 0 .75.75 0 101.06-1.06 5 5 0 00-7.07 0 .75.75 0 000 1.06zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <p className="">Please Try Again,and try to used Correct URL for Searching.</p>
      </div>
      <div className="m-10">
        <h1 className="md:text-[300px] text-9xl text-slate-200">404</h1>
      </div>
    </div>
  );
};

export default Four04Page;
