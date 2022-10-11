import React from "react";
import BannerImage from "../../Images/react-img.png";
const Header = () => {
  return (
    <div className=" ">
      <div className="md:flex items-center justify-around rounded bg-slate-50 container mx-auto mt-10 border">
        <div className="m-12 ">
          <img src={BannerImage} alt="react-icon" />
        </div>
        <div className="text-center text-2xl p-4 text-stone-700">
          <h2>
            Assalamu Alaikum, you are well by the grace of Allah. This website is basically made with React library. React makes
            it painless to create interactive UIs. Design simple views for each state in your application, and React will
            efficiently update and render just the right components when your data changes.
          </h2>
          <button className="btn m-5  bg-green-400 text-white">
            <span className="m-4">Let's Start</span>
            <svg
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
