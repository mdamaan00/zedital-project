import { React, useEffect } from "react";
import Cards from "./Cards.jsx";
import "./css/MainContent-3.css";
import phone from "./images/phone.jpg";
import computer from "./images/computer.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
function MainContent3() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div id="services" className="mainContent3">
      <div data-aos="fade-up" data-aos-once="true">
        <p className="u-heading">Our services</p>
        <h1 className="Heading">What do you need?</h1>
      </div>
      <div className="cards">
        <Cards
          image={phone}
          heading="Mobile Application & UI/UX"
          text="We offer dynamic and interactive UI/UX development services using the
            latest tools and technologies. Our designs improve the end- user
            experience and leave a long- lasting impact"
        />
        <Cards
          image={computer}
          heading="Website Development"
          text="Zedital services is one of the premier web development companies in India that providos Web Developmont
          services. We Serves You with Attractive ona
          Eye- Catching web design which Attracts Customer to
          Visit Your Website"
        />
        <Cards
          image={phone}
          heading="Search Engine Optimization"
          text=" We help you improve your Google ranking and increase
          your organic (non-paid) website traffic. SEO is more
          than just incorporating keywords and we can help to
          optimize all elements."
        />
        <Cards
          image={phone}
          heading="Social Media Marketing"
          text="We Help you with social media management and
          advertising to help you grow your business and
          reach new clients."
        />
        <Cards
          image={phone}
          heading="FB & Google Ad"
          text="We provide best Facebook and Google advertise
          services in affordable and best price with trending
          advertising ideas"
        />
        <Cards
          image={phone}
          heading="E-mail Marketing"
          text="The writing and editing experience of email marketing
          can be a sticky point for many creators. Our email
          designer helps you breeze through the editing so you
          can focus on writing your content - the most important
          part of email."
        />
        <Cards
          image={phone}
          heading="Branding"
          text="By building a website that describes what you offer,
          designing ads that promote your goods and services,
          selecting specific corporate colors that will be
          associated with your company, creating a logo, and
          featuring it acrobs all your social media accounts, you
          are branding your company."
        />
        <Cards
          image={phone}
          heading="Startup / Small Business Profile Management"
          text="A management profile is a description of the capabilities
          (skills and behaviors) and attitudes that an organization's
          managers require to drive the business strategy and lead
          their team."
        />
        <Cards
          image={phone}
          heading="PR & Verification"
          text="A Verification of status (vos) request is a request for
          proof of legal status or proof of entry into Canada. You
          may need to file a VOS request when you are traveling,
          for a pension, or for other reasons."
        />
      </div>
    </div>
  );
}

export default MainContent3;