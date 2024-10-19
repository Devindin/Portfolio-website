import React from "react";
import profileCSS from "./../profile/profile.module.css";
import HeroImg3 from "./../../assets/p1.jpeg";

function Profile() {
  return (
    <div className={profileCSS.ProfileWrapper}>
      <h2>Devindi Karunathilaka</h2>
      <div className={profileCSS.headerImg}>
        <img src={HeroImg3} alt="Profile" />
      </div>
      <div className={profileCSS.specialization}>
        <p>Specialization</p>
        <h3>Full Stack developer</h3>
      </div>
      <div className={profileCSS.social}>
        <p>Follow me on social media</p>
        <div className={profileCSS.socialIcons}>
          <a href="https://www.linkedin.com/in/devindi-karunathilaka-4bb52b230/">
            <i className="ri-linkedin-line"></i>
          </a>
          <a href="https://github.com/Devindin">
            <i className="ri-github-line"></i>
          </a>
          <a href="https://www.behance.net/devindikarunat">
            <i className="ri-behance-line"></i>
          </a>
          <i className="ri-instagram-line"></i>
          <i className="ri-facebook-line"></i>
        </div>
      </div>
      <button>Works Together!</button>
    </div>
  );
}

export default Profile;
