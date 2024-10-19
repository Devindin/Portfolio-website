import React from "react";
import Profile from "../../Components/profile/profile";
import MachineLearningCSS from '../MachineLearning/MachineLearning.module.css';
import project1 from '../../assets/MLproject1.mp4';
import project2 from '../../assets/MLproject2.png';


const MachineLearning = () => {
  return (
    <div className={`${MachineLearningCSS.Projectwrapper} section`}>
      <div className="App_Layout">
        <Profile />
        <div className="Main_Wrapper">
        <h1 className="section_Title">
        Machine learning Projects
      </h1> 
          <div className={MachineLearningCSS.projectcards}>
            <div className={MachineLearningCSS.card}>
              <video src={project1} alt="Web Project 1" controls />
              <h2> Flower classification system</h2>
              <h4>Key features:</h4>
              <p>User can upload a image and get out put as type of flower</p>
              <h4>Technologies and special functionalities:</h4>
              <p>CNN model</p>
              <p>Tensorflow</p>
              <p>Python</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Flower-Classification-using-CNN-.git">https://github.com/Devindin/Flower-Classification-using-CNN-.git</a>
            </div>
            <div className={MachineLearningCSS.card}>
              <img src={project2} alt="Web Project 1" controls />
              <h2> Dog or cat classification system</h2>
              <h4>Key features:</h4>
              <p>User can upload a image and get out put as dog or cat</p>
              <h4>Technologies and special functionalities:</h4>
              <p>CNN model</p>
              <p>Tensorflow</p>
              <p>Googl colab</p>
              <p>Python</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Dog-or-Cat-Image-Classifier-using-CNN.git">https://github.com/Devindin/Dog-or-Cat-Image-Classifier-using-CNN.git</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;
