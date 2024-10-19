import React from "react";
import aboutcss from "../About/About.module.css";
import aboutImg1 from "../../assets/about1.webp";
import aboutImg2 from "../../assets/about2.webp";
import aboutImg3 from "../../assets/about3.webp";
import aboutImg4 from "../../assets/about4.webp";
function About() {
  return (
    <div id="about" className={`${aboutcss.AboutWrapper} section`}>
      <h3 className="sectionheading">
        <i className="ri-shining-fill"></i> About Me
      </h3>
      <h1 className="section_Title">
        Turning Complex <br />
        Problems Into Small Designs.
      </h1>
      <div className={aboutcss.experienceWrapper}>
        <div className={aboutcss.experienceCard}>
          <h2>
            <span>+3</span> Years of Experience
          </h2>
        </div>
        <div className={aboutcss.experienceCard}>
          <h2>
            <span>+30</span> Projects Done
          </h2>
        </div>
      </div>
      <p>As a full-stack developer, I specialize in building dynamic and responsive web applications. My expertise spans across both front-end and back-end development, ensuring seamless user experiences and robust functionality. I have a passion for coding, and I thrive on solving complex technical challenges.</p>
      <p>In addition to full-stack development, I am also deeply passionate about UI/UX design. I focus on creating visually appealing and user-friendly interfaces that prioritize intuitive navigation and a smooth user journey. I believe that great design is not just about aesthetics but also about enhancing usability and accessibility.</p>
      <a href="/cv.pdf" download>
      <button>
        Download CV <i className="ri-download-line"></i>
      </button>
      </a>
      {/*  */}
      
    </div>
  );
}

export default About;
