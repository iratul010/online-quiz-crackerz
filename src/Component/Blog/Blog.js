import React from "react";
import Questions from "../Questinos/Questions";

const Blog = () => {
  const questions = [
    {
      id: 1,
      question: "What is the React Router Purpose?",
      answer:
        "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components. ",
    },
    {
      id: 2,
      question: "How does context Api work in React?",
      answer: `The React Context API is a way for a React app to effectively produce global Variables that can be passed around .This is the alternative to 'Prop Drilling' or moving props from grandparent to child to parent, and son on. Context is also touted as an easier, Lighter Approach to state management using Redux.`,
    },
    {
      id: 3,
      question: "What is useRef in react?",
      answer: `The useRef Hook allows you to persist values between renders.

      It can be used to store a mutable value that does not cause a re-render when updated.
      
      It can be used to access a DOM element directly.`,
    },
  ];
  return (
    <div className=" container mx-auto mt-12 bg-green-50">
      <div className="flex p-3 text-slate-600 gap-3 items-center text-clip font-bold text-3xl">
        <h2>Here is have some Questions & Yours need to you know </h2>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <div>
        {questions.map((q) => (
          <Questions key={q.id} q={q}></Questions>
        ))}
      </div>
    </div>
  );
};

export default Blog;
