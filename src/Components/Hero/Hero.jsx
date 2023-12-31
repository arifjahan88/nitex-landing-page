import { useContext, useEffect, useRef, useState } from "react";
import "./Hero.css";
import hero_design from "../../assets/hero-design.png";
import hero_business from "../../assets/hero-business.png";
import hero_tech from "../../assets/hero-tech.png";

import { CursorContext } from "../../Context/CursorContext";
import { setCursor } from "../../CursorFunction/CursorFunction";

const Hero = () => {
  const INITIAL_TIMER = 0;
  const TARGET_TIMER = 0;
  const hero_categories = {
    design: "design",
    tech: "tech",
    business: "business",
  };

  //   const [isHovered, setIsHovered] = useState(false);

  const [hoverImage, setHoverImage] = useState("design");
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const interval = useRef();

  useEffect(() => {
    if (isAutoSlide) {
      if (hoverImage == hero_categories.design) {
        setHoverImage(hero_categories.tech);
      } else if (hoverImage == hero_categories.tech) {
        setHoverImage(hero_categories.business);
      } else {
        setHoverImage(hero_categories.design);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer, isAutoSlide]);

  useEffect(() => {
    function handleTimer() {
      interval.current = setInterval(() => {
        setTimer((count) => count + 1);
      }, 3000);
    }

    if (timer <= TARGET_TIMER && interval.current) {
      clearInterval(interval.current);
    }
    if (timer === INITIAL_TIMER) {
      handleTimer();
    }
  }, [timer]);

  // Button Magnetic Part
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const button = document.querySelector("#magnet");
    const position = button.getBoundingClientRect();

    setButtonPosition({
      x: position.left + position.width,
      y: position.top + position.height,
    });

    button.addEventListener("mousemove", function (e) {
      const x = e.pageX - position.left - position.width / 2;
      const y = e.pageY - position.top - position.height / 2;

      button.style.transform = "translate(" + x * 0.5 + "px, " + y * 0.5 + "px)";

      // Animation part
      const xx = e.pageX - button.offsetLeft;
      const yy = e.pageY - button.offsetTop;

      button.style.setProperty("--xx", xx + "px");
      button.style.setProperty("--yy", yy + "px");
    });

    button.addEventListener("mouseout", function () {
      button.style.transform = "translate(0px, 0px)";
    });
  }, []);

  const getCursorContext = useContext(CursorContext);

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor);
  };
  return (
    <section className="container">
      <div className="hero_container">
        <div className="hero_left">
          <div className="hero_title_container">
            <span
              className="hero_title"
              onMouseOver={() => {
                setHoverImage(hero_categories.design);
                setIsAutoSlide(false);
                changeCursor("size_defference");
              }}
              onMouseLeave={() => {
                setIsAutoSlide(true);
                changeCursor();
              }}
              style={{ color: hoverImage == hero_categories.design ? "var(--dark)" : "#fff" }}
            >
              Design
            </span>
            <span
              className="hero_title"
              onMouseOver={() => {
                setHoverImage(hero_categories.tech);
                setIsAutoSlide(false);
                changeCursor("size_defference");
              }}
              onMouseLeave={() => {
                setIsAutoSlide(true);
                changeCursor();
              }}
              style={{ color: hoverImage == hero_categories.tech ? "var(--dark)" : "#fff" }}
            >
              Technology
            </span>
            <span
              className="hero_title"
              onMouseOver={() => {
                setHoverImage(hero_categories.business);
                setIsAutoSlide(false);
                changeCursor("size_defference");
              }}
              onMouseLeave={() => {
                setIsAutoSlide(true);
                changeCursor();
              }}
              style={{ color: hoverImage == hero_categories.business ? "var(--dark)" : "#fff" }}
            >
              Business
            </span>
          </div>
          <p className="hero_body">
            Transform Your Business with Our Expert Design, Development, and Marketing Services.
          </p>
          <p>
            <div
              id="magnet"
              className="hero_btn"
              style={{ left: buttonPosition.x, top: buttonPosition.y }}
            >
              <span>Get Started</span>
            </div>
          </p>
        </div>
        <div className="hero_right">
          {hoverImage == hero_categories.design ? (
            <img
              alt=""
              data-aos="fade"
              data-aos-duration="1000"
              src={hero_design}
              style={{ maxWidth: "648px", height: "auto" }}
            />
          ) : (
            ""
          )}

          {hoverImage == hero_categories.tech ? (
            <img
              alt=""
              data-aos="fade"
              data-aos-duration="1000"
              src={hero_tech}
              style={{ maxWidth: "648px", height: "auto" }}
            />
          ) : (
            ""
          )}

          {hoverImage == hero_categories.business ? (
            <img
              alt=""
              data-aos="fade"
              data-aos-duration="1000"
              src={hero_business}
              style={{ maxWidth: "648px", height: "auto" }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
