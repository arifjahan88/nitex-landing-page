import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import { CursorContext } from "../../Context/CursorContext";
// import { useEffect, useState } from "react";
// import CursorPointer from "../CursorPointer/CursorPointer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
