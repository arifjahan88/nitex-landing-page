import "./Founder.css";
import img1 from "../../assets/LinkedIn_color.png";
import img2 from "../../assets/instagram_color.png";
import img3 from "../../assets/mail.png";
import founderImage from "../../assets/founder_image.png";
import { CursorContext } from "../../Context/CursorContext";
import { useContext } from "react";
import { setCursor } from "../../CursorFunction/CursorFunction";

const Founder = () => {
  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor);
  };
  return (
    <section className="container">
      <section className="founderPart">
        <div className="textpart">
          <div
            onMouseEnter={() => {
              changeCursor("size_defference");
            }}
            onMouseLeave={() => {
              changeCursor();
            }}
          >
            <h3 className="header_text">Meet the</h3>
            <h3 className="header_text">Founder</h3>
          </div>
          <p className="header_details">
            <span>
              Md Arif Jahan <br />{" "}
            </span>{" "}
            Founder, Creative Mind
          </p>
        </div>
        <div className="middlepart">
          <p className="middletext">
            &quot;Wonder what your customer really wants? Think like a customer. First Experience
            the problem then find it&apos;s solution and make lives easier.&quot;
          </p>
          <div className="mediaimg">
            <a href="https://www.linkedin.com/in/arif-jahan/" target="_blank" rel="noreferrer">
              <img className="linkedin" src={img1}></img>
            </a>
            <a>
              <img src={img2}></img>
            </a>
            <a href="mailto:arifjahan.cse@gmail.com">
              <img src={img3}></img>
            </a>
          </div>
        </div>
        <div className="founder_img_part">
          <img src={founderImage}></img>
        </div>
      </section>
    </section>
  );
};

export default Founder;
