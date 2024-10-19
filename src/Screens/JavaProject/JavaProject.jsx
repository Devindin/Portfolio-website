import React from "react";
import Profile from "../../Components/profile/profile";
import JavaProjectCSS from '../JavaProject/JavaProject.module.css';
import project1 from '../../assets/javaproject1.mp4';
import project2 from '../../assets/javaproject2.mp4';
import project3 from '../../assets/javaproject3.mp4';


const JavaProject = () => {
  return (
    <div className={`${JavaProjectCSS.Projectwrapper} section`}>
      <div className="App_Layout">
        <Profile />
        <div className="Main_Wrapper">
        <h1 className="section_Title">
        Java Projects
      </h1> 
          <div className={JavaProjectCSS.projectcards}>
            <div className={JavaProjectCSS.card}>
              <video src={project1} alt="Web Project 1" controls />
              <h2>To-Do List </h2>
              
              <h4>Key features:</h4>
              <p>Create account and Login to the system</p>
              <p>View , add , remove and update to do s</p>
              <h4>Technologies and special functionalities:</h4>
              <p>Java , My SQL</p>
              <p>Intellij IDEA</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/ToDo-App-using-java.git">https://github.com/Devindin/ToDo-App-using-java.git</a>
            </div>
            <div className={JavaProjectCSS.card}>
              <video src={project3} alt="Web Project 1" controls />
              <h2>Simple Billing System </h2>
              
              <h4>Key features:</h4>
              <p>Select goods and add to list and remove items and get total </p>
              <h4>Technologies and special functionalities:</h4>
              <p>Java</p>
              <p>NetBeans</p>
            </div>
            <div className={JavaProjectCSS.card}>
              <video src={project2} alt="Web Project 1" controls />
              <h2>Simple Calculator </h2>
              
              <h4>Key features:</h4>
              <p>Create account and Login to the system</p>
              <p>Calculate numbes</p>
              <h4>Technologies and special functionalities:</h4>
              <p>Java</p>
              <p>NetBeans</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaProject;
