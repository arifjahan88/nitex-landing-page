import { businessdata, designdata, technologydata } from "./Data/Data";
import "./OurService.css";
import GreenCircle from "../../assets/green_circle.svg";
import PinkCircle from "../../assets/pink_circle.svg";
import BlueCircle from "../../assets/blue_circle.svg";

const OurService = () => {
  return (
    <section className="service_container">
      <div className="container">
        <div className="service_header">
          <div className="service_title_container">
            <span>Our</span>
            <span>Service</span>
          </div>
          <p className="service_text">
            We aim to keep you at updated at all times of the design process. Here is a tentative
            step-by-step process for our design work.
          </p>
        </div>
        {/* ---------------Design section--------------- */}
        <div className="belowmain">
          <div className="design_container">
            <div className="service_category_title">
              <div className="circle_container">
                <img src={GreenCircle} />
              </div>
              <h3>DESIGN</h3>
            </div>
            <div className="design_text">
              {designdata.map((data) => (
                <p key={data.id}>{data.name}</p>
              ))}
            </div>
          </div>
          {/* ---------------Technology section--------------- */}
          <div className="technology_container">
            <div className="service_category_title">
              <div className="circle_container">
                <img src={PinkCircle} />
              </div>
              <h3>TECHNOLOGY</h3>
            </div>
            <div className="design_text">
              {technologydata.map((data) => (
                <p key={data.id}>{data.name}</p>
              ))}
            </div>
          </div>
          {/* ---------------business section--------------- */}
          <div className="business_container">
            <div className="service_category_title">
              <div className="circle_container">
                <img src={BlueCircle} />
              </div>
              <h3>BUSINESS</h3>
            </div>
            <div className="design_text">
              {businessdata.map((data) => (
                <p key={data.id}>{data.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
