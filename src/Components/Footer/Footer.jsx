import { useEffect, useState } from "react";
import "./Footer.css";
import LinkedInImg from "../../assets/LinkedIn.png";
import InstagramImg from "../../assets/instagram.png";
import Email from "../../assets/email.png";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);
  return (
    <footer className="footer">
      <div className="container">
        <div className="first_row">
          <div>
            <h2>
              Have an <span className="outline">Idea</span> ?
            </h2>
            <div className="subtitle">
              <h3>Let&apos;s Connect!</h3>
            </div>
          </div>
          <div className="align_right">
            <ul>
              <li>
                <p>Design</p>
              </li>
              <li>
                <p>Development</p>
              </li>
              <li>
                <p>Marketing</p>
              </li>
            </ul>
          </div>
          <div className="align_right">
            <ul>
              <li>
                <p>About Us</p>
              </li>
              <li>
                <p>Our Work</p>
              </li>
              <li>
                <p>Contact Us</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="last_row">
          <div className="footer_contact">
            <a href="mailto:arifjahan.cse@gmail.com" rel="noreferrer" target="_blank">
              <p>arifjahan.cse@gmail.com</p>
            </a>
            <div className="social_icon_container">
              <a href="https://www.linkedin.com/in/arif-jahan/" rel="noreferrer" target="_blank">
                <img src={LinkedInImg} width={24} height={24} />
              </a>
              <a>
                <img src={InstagramImg} width={24} height={24} />
              </a>
              <a href="mailto:arifjahan.cse@gmail.com" rel="noreferrer" target="_blank">
                <img src={Email} width={34} height={24} />
              </a>
            </div>
          </div>
          <div className="copyright">
            <p className="copyright_band">
              <span>&copy; </span>Alpharule Creatives
            </p>
            <p className="copyright_text">All Rights Reserved {year}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
