import { useContext, useEffect, useState } from "react";
import "./CursorPointer.css";
import { CursorContext } from "../../Context/CursorContext";

const CursorPointer = () => {
  const context = useContext(CursorContext);
  const [mousePosition, setMousePosition] = useState({ x: -3, y: -3 });
  // const [cursorSize, setCursorSize] = useState(80);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
    //   document.addEventListener("mouseenter", () => {
    //     setCursorSize(80);
    //   });
    //   document.addEventListener("mouseleave", () => {
    //     setCursorSize(80);
    //   });
  }, []);
  return (
    <div
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        width: context.cursorStyle.width,
        height: context.cursorStyle.height,
        backgroundColor: context.cursorStyle.color,

        mixBlendMode:
          context.cursorStyle.width == 80 && context.cursorStyle.height == 80
            ? "difference"
            : "normal",
      }}
      className="cursor"
    />
  );
};

export default CursorPointer;
