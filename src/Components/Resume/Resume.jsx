import React from "react";
import resumecss from "../Resume/Resume.module.css";

function Resume() {
  return (
    <div>
      <div id="resume" className={`${resumecss.ResumeWrapper} section`}>
        <h3 className="sectionheading">
          <i className="ri-shining-fill"></i> Resume
        </h3>
        <h1 className="section_Title">
          Education and <br />
          Practical Experience
        </h1>

        <div className={resumecss.EducationWrapper}>
          <h1>My Education</h1>
          <div className={resumecss.education}>
            <small>2021-24</small>
            <h3>
              Bachelor of Science in Computer Science
              <span>
                {" "}
                Course By{" "}
                <strong>
                  Trincomalee Campus Eastern University Sri Lanka
                </strong>
              </span>
            </h3>
            <p>
              During my Bachelor of Science in Computer Science, I gained a
              strong foundation in programming, data structures, and algorithms.
              I worked on several hands-on projects, including developing web
              applications and machine learning models. My coursework included
              subjects such as Software Engineering,
              and Database Management Systems. I also actively participated in
              coding competitions and collaborative projects, which helped
              enhance my problem-solving and teamwork skills.
            </p>
          </div>
          <div className={resumecss.education}>
            <small>2021-24</small>
            <h3>
              Expert UI/UX Designing
              <span>
                {" "}
                Course By <strong>IDET</strong>
              </span>
            </h3>
            <p>
              In the Expert UI/UX Designing course offered by IDET, I gained
              comprehensive knowledge and skills in creating user-centered
              designs. The course covered advanced design principles, user
              research methods, wireframing, prototyping, and usability testing.
              I learned how to craft intuitive and aesthetically pleasing
              interfaces while ensuring a seamless user experience. Through
              hands-on projects and real-world case studies, I developed
              expertise in tools like Figma , and honed my ability
              to translate user needs into effective design solutions.
            </p>
          </div>
          <div className={resumecss.education}>
            <small>2021-24</small>
            <h3>
              Master MERN Stack
              <span>
                {" "}
                Course By <strong>IDET</strong>
              </span>
            </h3>
            <p>
              Throughout the Master MERN Stack course offered by IDET, I
              deepened my expertise in full-stack development with a focus on
              the MERN stack: MongoDB, Express.js, React, and Node.js. The
              course covered advanced topics such as state management with
              Redux, RESTful API development, and real-time web applications. I
              completed several projects, including a complex e-commerce
              platform and a real-time chat application, which enhanced my
              skills in both front-end and back-end development. This
              comprehensive training equipped me with the knowledge and hands-on
              experience necessary to tackle modern web development challenges.
            </p>
          </div>
          <div className={resumecss.education}>
            <small>2005-18</small>
            <h3>
              O/L and A/L
              <span>
                {" "}
                Course By <strong>Holly Family Balika Wennappuwa</strong>
              </span>
            </h3>
            <p>
              During my O/L and A/L studies at Holly Famili Balika in Wennappuwa, I completed a rigorous academic program that laid the foundation for my future education. The curriculum included a broad range of subjects, allowing me to develop a well-rounded knowledge base and critical thinking skills. I participated in various extracurricular activities and engaged in community service, which enhanced my leadership and teamwork abilities. This period was instrumental in shaping my academic and personal growth, preparing me for higher education and professional challenges.
            </p>
          </div>
        </div>

        <div className={resumecss.EducationWrapper}>
          <h1>My Experience</h1>
          <div className={resumecss.education}>
            <small>2021-24</small>
            <h3>
              Full Stack developer
              <span>
                {" "}
                In the{" "}
                <strong>
                  IDET
                </strong>
              </span>
            </h3>
            <p>
            As a Full Stack Developer at IDET, I worked on a range of projects that involved both front-end and back-end development. I designed and implemented user-friendly interfaces using React, and built robust server-side applications with Node.js and Express. My role also included integrating APIs, managing databases with MongoDB, and ensuring seamless communication between the client and server. Additionally, I was involved in code reviews, collaborative problem-solving, and agile development practices. This experience honed my skills in full-stack development, project management, and teamwork.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Resume;
