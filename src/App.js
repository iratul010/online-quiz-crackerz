import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: "",
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <h2 className=" bg-slate-500 text-4xl">tailwindcss</h2>
    </div>
  );
}

export default App;
