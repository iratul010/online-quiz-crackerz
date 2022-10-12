import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Component/Blog/Blog";
import Quiz from "./Component/Quiz/Quiz";
import Statistics from "./Component/Statistics/Statistics";
import Topics from "./Component/Topics/Topics";
import Main from "./Layout/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Four04Page from "./Component/Four04Page/Four04Page";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",

          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topics></Topics>,
        },
        {
          path: "/statistics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element: <Quiz></Quiz>,
        },
      ],
    },

    {
      path: "*",
      element: <Four04Page></Four04Page>,
    },
  ]);
  return (
    <div className="App">
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
