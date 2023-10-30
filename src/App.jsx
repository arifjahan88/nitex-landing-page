import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
