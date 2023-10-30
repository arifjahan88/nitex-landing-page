import { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { CursorContext } from "./Context/CursorContext";
import CursorPointer from "./Components/CursorPointer/CursorPointer";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [cursorStyle, setCursorStyle] = useState({
    width: 10,
    height: 10,
    color: "#000",
    mixBlendMode: "difference",
  });
  useEffect(() => {
    checkIsMobile();
  }, []);

  const checkIsMobile = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <CursorContext.Provider value={{ cursorStyle, setCursorStyle }}>
        {!isMobile && <CursorPointer />}
        <RouterProvider router={routes} />
      </CursorContext.Provider>
    </>
  );
}

export default App;
