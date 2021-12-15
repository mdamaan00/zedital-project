import { React, useEffect } from "react";
import image from "./images/Header-image.png";
import "./css/starter.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Starter() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="Heading">
      <p data-aos="fade-right" data-aos-once="true" className="mainHeading">
        ZEDITAL MARKETING AGENCY
      </p>
      <p data-aos="fade-left" data-aos-once="true" className="Quote">
        Advertise, analyze and optimize! We do it all for you
      </p>
      <div className="flex-btn">
        <a data-aos="fade-right" data-aos-once="true" className="flex-btn-child" href="#services">What we do?</a>
        <p data-aos="zoom-in" data-aos-once="true" className="flex-btn-child">Or</p>
        <a data-aos="fade-left" data-aos-once="true" className="flex-btn-child" target="_blank" rel="noreferrer" href="https://wa.me/message/IQKHO7Q5FO4HO1">Send Notification</a>
      </div>
      <img
        className="starter-img"
        data-aos="zoom-in-up"
        data-aos-once="true"
        src={image}
        alt=""
      />
    </div>
  );
}

export default Starter;