import React from "react";
import Profile from "../../Components/profile/profile";
import uiuxCSS from '../UIUX/UIUX.module.css';
import project1 from '../../assets/UIproject1.mp4';


const UIUX = () => {
  return (
    <div className={`${uiuxCSS.Projectwrapper} section`}>
      <div className="App_Layout">
        <Profile />
        <div className="Main_Wrapper">
        <h1 className="section_Title">
        Web Application Projects
      </h1> 
          <div className={uiuxCSS.projectcards}>
            <div className={uiuxCSS.card}>
              <video src={project1} alt="Web Project 1" controls />
              <h2>Wallet App </h2>
              <h4>Key features:</h4>
              <p>User can create new account and logging</p>
              <p>Make payments through this app </p>
              <p>Make transactions etc...</p>
              <h4>Technologies and special functionalities:</h4>
              <p>Figma</p>
              <h4>🔗 Check out on GitHub:</h4>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUX;
