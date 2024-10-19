import React from "react";
import portfolioCSS from "../Portfolio/Portfolio.module.css";
import portfolio1 from "../../assets/image3.jpg";
import portfolio2 from "../../assets/Portfolio2.webp";
import portfolio3 from "../../assets/Portfolio4.webp";
import portfolio4 from "../../assets/cofee.jpg";
function Portfolio() {
  return (
    <div id="portfolio" className={`${portfolioCSS.Portfoliowrapper} section`}>
      <h3 className="sectionheading">
        <i className="ri-shining-fill"></i> Portfolio
      </h3>
      <h1 className="section_Title">
        Check Out My <br />
        Featured Projects.
      </h1>
      <div className={portfolioCSS.portfoliocards}>
        <div className={portfolioCSS.card}>
          <img src={portfolio1} alt="" />

          <div className={portfolioCSS.tags}>
            <a href="web-application">
              <span>Web Application</span>
            </a>
            <span>MERN STACK / React / HTML</span>
          </div>
        </div>
        <div className={portfolioCSS.card}>
          <img src={portfolio2} alt="" />
          <div className={portfolioCSS.tags}>
            <a href="/ui-ux">
              <span>UI design</span>
            </a>
            <span>Figma</span>
          </div>
        </div>
        <div className={portfolioCSS.card}>
          <img src={portfolio3} alt="" />
          <div className={portfolioCSS.tags}>
            <a href="/machine-learning">
              <span>Machine Lerning projects</span>
            </a>
            <span>Python</span>
          </div>
        </div>
        <div className={portfolioCSS.card}>
          <img src={portfolio4} alt="" />
          <div className={portfolioCSS.tags}>
            <a href="/java-project">
              <span>Java Applications</span>
            </a>
            <span>Java</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
