import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CursorContext } from "../../Context/CursorContext";
import { useEffect, useState } from "react";
import CursorPointer from "../CursorPointer/CursorPointer";

const Main = () => {
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
  return (
    <>
      <CursorContext.Provider value={{ cursorStyle, setCursorStyle }}>
        {!isMobile && <CursorPointer />}
        <Navbar />
        <Outlet />
        <Footer />
      </CursorContext.Provider>
    </>
  );
};

export default Main;
