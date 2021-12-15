import React, { useEffect } from "react";
import "./css/Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdFacebook } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  let newDate = new Date();
  let year = newDate.getFullYear();
  return (
    <div className="footer-box">
      <div className="flex-box">
        <div className="flex-child-1">
          <div className="map">
            <p className="footer-headings">Our Office</p>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.336223290313!2d78.01669510221942!3d30.284488550113302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bd7b00eb035%3A0xa679c6982c0e6fe!2sVigilance%20OffIce%20Rd%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1639296057771!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              
              loading="lazy"
            ></iframe>
            <p>
              Phase 1, Shanti Vihar, Kargi grant, Near Vigilance Office road,
              Dehradun-248001
            </p>
          </div>
        </div>
        <div className="flex-child-2">
          <div className="c2-sec-1">
            <p className="footer-headings">Say Hello</p>
            <p>
              If you are interested in working with us or just want to say hello
              simply drop us a line! <a href="mailto:">info@zedital.com</a>
            </p>
          </div>
          <div className="c2-sec-2">
            <p className="footer-headings">Quick Links</p>
            <ul>
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#testimonials">Testimonial</a>
              </li>
              <li>
                <a href="#aboutus">About us</a>
              </li>
              <li>
                <a href="#contactus">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-child-3">
          <div className="c3-sec-1">
            <p className="footer-headings">subscribe us</p>
            <form action="" method="post">
              <input
                type="email"
                name="email"
                id="subscribe-input"
                placeholder="Your e-mail..."
                required
              />
              <br />
              <button className="subscribe-btn">SUBMIT</button>
            </form>
          </div>
          <div className="c3-sec-2">
            <p className="footer-headings">Follow us on</p>
            <a href="http://">
              <MdFacebook className="footer-icons" />
            </a>
            <a href="http://">
              <BsInstagram className="footer-icons" />
            </a>
            <a href="http://">
              <AiFillTwitterCircle className="footer-icons" />
            </a>
            <a href="http://">
              <BsLinkedin className="footer-icons" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright© {year} Zedital Marketing Agency</p>
      </div>
    </div>
  );
}

export default Footer;