import leftimage from "../../assets/left-star.png";
import rightimage from "../../assets/right-star.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about_section">
      <div className="container">
        <h4 className="about_heading">About Us</h4>
        <p>
          Our team of experienced developers and designers will work with you to design, develop,
          market and deliver software that meets your unique needs and goals.
        </p>
      </div>
      <div className="left_image">
        <img src={leftimage}></img>
      </div>
      <div className="right_image">
        <img src={rightimage}></img>
      </div>
    </section>
  );
};

export default AboutUs;
