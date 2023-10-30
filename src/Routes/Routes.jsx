import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <About />,
      },
    ],
  },
]);
