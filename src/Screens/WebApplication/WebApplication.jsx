import React from "react";
import Profile from "../../Components/profile/profile";
import webapplicationCSS from "../WebApplication/WebApplication.module.css";
import project1 from "../../assets/webproject1.mp4";
import project2 from "../../assets/webproject2.mp4";
import project3 from "../../assets/webproject3.mp4";
import project4 from "../../assets/webproject4.mp4";
import project15 from "../../assets/webproject15.mp4";
import project10 from "../../assets/webproject10.mp4";
import project11 from "../../assets/webproject11.mp4";
import project14 from "../../assets/webproject14.mp4";
import project6 from "../../assets/webproject6.mp4";
import project9 from "../../assets/webproject9.mp4";
import project16 from "../../assets/webproject16.mp4";
import project5 from "../../assets/webproject5.mp4";
import project7 from "../../assets/webproject7.mp4";
import project8 from "../../assets/webproject8.mp4";
import project12 from "../../assets/webproject12.mp4";
import project13 from "../../assets/webproject13.mp4";
import project17 from "../../assets/webproject17.mp4";

const WebApplication = () => {
  return (
    <div className={`${webapplicationCSS.Projectwrapper} section`}>
      <div className="App_Layout">
        <Profile />
        <div className="Main_Wrapper">
          <h1 className="section_Title">Web Application Projects</h1>
          <div className={webapplicationCSS.projectcards}>
            <div className={webapplicationCSS.card}>
              <video src={project9} alt="Web Project 1" controls />
              <h2>
                E-commerce website with admin dashboard for an online flower
                shop{" "}
              </h2>
              <h4>Key features:</h4>
              <p>Customer Experience:</p>
              <p>
                View available products and detailed descriptions. <br />
                Place orderswith ease.
                <br />
                User-friendly interface for a pleasant shopping experience.
              </p>
              <p>Admin Panel:</p>
              <p>
                Secure admin login.
                <br />
                Comprehensive view of all products, orders, and customer
                details. <br />
                Capability to add, update, and delete products.
              </p>
              <h4>Technologies and special functionalities:</h4>
              <p>Mongo DB , Express JS , React , Node JS , Tailwind CSS</p>
              <p>API calling</p>
              <h4>🔗 Check out on GitHub:</h4>
              <p>FrontEnd</p>
              <a href="https://github.com/Devindin/Online-Flower-Shop-FrontEnd.git">
                https://github.com/Devindin/Online-Flower-Shop-FrontEnd.git
              </a>
              <p>BackEnd</p>
              <a href="https://github.com/Devindin/Online-Flower-Shop-backEnd.git">
                https://github.com/Devindin/Online-Flower-Shop-backEnd.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <video src={project10} alt="Web Project 4" controls />
              <h2> Appointment Management System </h2>
              <h4>Key features:</h4>
              <p>Receptionist Dashboard:</p>
              <p>
                Appointment Management: Create, view (by date and doctor name),
                and cancel appointments seamlessly.
                <br />
                Doctor Management: Add new doctors and view their details
                efficiently.
                <br />
                Patient Management: Add, view (using NIC), edit, and delete
                patient records with ease.
              </p>
              <p>Doctor Dashboard:</p>
              <p>
                Appointment Viewing: Doctors can log in to view their own
                appointments based on the date.
              </p>
              <h4>Technologies and special functionalities:</h4>
              <p>Mongo DB , Express JS , React , Node JS , Tailwind CSS</p>
              <p>API calling</p>
              <p>Login authentications and authorizations</p>
              <h4>🔗 Check out on GitHub:</h4>
              <p>FrontEnd</p>
              <a href="https://github.com/Devindin/Appointment-Management-System-using-MERN-stack-frontend.git">
                https://github.com/Devindin/Appointment-Management-System-using-MERN-stack-frontend.git
              </a>
              <p>BackEnd</p>
              <a href="https://github.com/Devindin/Appointment-Management-System-using-MERN-stack-backend.git">
                https://github.com/Devindin/Appointment-Management-System-using-MERN-stack-backend.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <video src={project14} alt="Web Project 4" controls />
              <h2> Logging System and Beyond!</h2>
              <h4>Key features:</h4>
              <p>Building a Logging System:</p>
              <p>
                Starting with the basics, I crafted a robust logging system
                using MERN stack. Postman came in handy for API testing,
                ensuring smooth communication between my frontend and backend.
              </p>
              <p> Creating the Authentication Flow:</p>
              <p>
                First, users encounter the login page. If they're new, they
                seamlessly register through a form, which adds them to the
                application and stores their data securely in the database. Once
                registered, users can log in using their credentials.
              </p>
              <p>Home Sweet Home:</p>
              <p>
                Upon logging in, users are greeted with a personalized home
                page, dynamically loaded with their details fetched directly
                from the database. This ensures a customized experience for
                every user.
              </p>
              <p>Editing User Details:</p>
              <p>
                Want to update your details? No problem! With a click of the
                'Edit' button, users can modify their information, which is then
                seamlessly updated and stored back into the database.
              </p>
              <p>Adding Relations:</p>
              <p>
                With the 'Add Relation' button, users can establish connections
                and relations, enriching their profile and network. Each
                relation is stored securely in the database, enhancing the
                user's experience.
              </p>
              <p>Deleting Relations:</p>
              <p>
                Need to clean up? Simply click the bin icon to delete unwanted
                relations, both from the profile view and database, ensuring a
                clutter-free and organized profile.
              </p>
              <h4>Technologies and special functionalities:</h4>
              <p>Mongo DB , Express JS , React , Node JS , Tailwind CSS</p>
              <p>API calling</p>
              <p>Login authentications</p>
              <h4>🔗 Check out on GitHub:</h4>
              <p>FrontEnd</p>
              <a href="https://github.com/Devindin/Login-Authentication-And-Account-maintain.git">
                https://github.com/Devindin/Login-Authentication-And-Account-maintain.git
              </a>
              <p>BackEnd</p>
              <a href="https://github.com/Devindin/Login-authentication-and-account-maintain-backend-.git">
                https://github.com/Devindin/Login-authentication-and-account-maintain-backend-.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <video src={project2} alt="Web Project 2" controls />
              <h2> Buyer Wallet Interface </h2>
              <h4>Key features:</h4>
              <p>
                allows buyers to easily manage their USDT and LKR balances with
                a smooth and user-friendly interface, paving the way for secure
                and efficient trading.
              </p>
              <p>Graph</p>
              <h4>Technologies and special functionalities:</h4>
              <p>React , Tailwind css</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Buyer-wallet-using-react.git">
                https://github.com/Devindin/Buyer-wallet-using-react.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <video src={project15} alt="Web Project 3" controls />
              <h2>User registration system</h2>
              <h4>Key features:</h4>
              <p>
                enabling secure and efficient trading between retail buyers and
                sellers.
              </p>
              <p>Responsive</p>
              <h4>Technologies and special functionalities:</h4>
              <p>React , Tailwind css</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/TetherX-signUp.git">
                https://github.com/Devindin/TetherX-signUp.git
              </a>
            </div>

            <div className={webapplicationCSS.card}>
              <video src={project11} alt="Web Project 4" controls />
              <h2>Online book library</h2>
              <h4>Key features:</h4>
              <p>
                Discover, explore, and immerse yourself in a world of
                literature.{" "}
              </p>
              <h4>Technologies and special functionalities:</h4>
              <p>React</p>
              <p>Open Library API</p>

              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/BookFinderApp.git">
                https://github.com/Devindin/BookFinderApp.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <video src={project4} alt="Web Project 4" controls />
              <h2>Blogs website </h2>
              <h4>Key features:</h4>
              <p>Add new blogs</p>
              <p>Remove blogs</p>
              <p>Update blogs</p>
              <p>View blogs</p>
              <h4>Technologies and special functionalities:</h4>
              <p>React</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Blog-web-site-using-react.git">
                https://github.com/Devindin/Blog-web-site-using-react.git
              </a>
            </div>

            <div className={webapplicationCSS.card}>
              <video src={project6} alt="Web Project 4" controls />
              <h2>Animated Website</h2>
              <h4>Key features:</h4>
              <p>
                a dynamic and engaging animated website built with React and
                Framer Motion.
              </p>
              <h4>Technologies and special functionalities:</h4>
              <p>React</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/animated-web-experience.git">
                https://github.com/Devindin/animated-web-experience.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <video src={project16} alt="Web Project 4" controls />
              <h2>Netflix Clone </h2>
              <h4>Key features:</h4>
              <p>Responsive design with an intuitive UI/UX</p>
              <h4>Technologies and special functionalities:</h4>
              <p>React</p>
              <p>OpenAI </p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Netflix-clone-using-react-and-open-API.git">
                https://github.com/Devindin/Netflix-clone-using-react-and-open-API.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <video src={project7} alt="Web Project 4" controls />
              <h2>Online Hanging plants shop website </h2>
              <h4>Key features:</h4>
              <p>Responsive website</p>
              <h4>Technologies and special functionalities:</h4>
              <p>React</p>
              <p>Tailwind css</p>
              <p>Vite</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Hanging-Plants-web-page.git">
                https://github.com/Devindin/Hanging-Plants-web-page.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <video src={project12} alt="Web Project 4" controls />
              <h2>Ecommerce frontend</h2>
              <h4>Key features:</h4>
              <p> Discover, explore dresses and add to cart </p>
              <h4>Technologies and special functionalities:</h4>
              <p>React</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/E-commerce-web-site.git">
                https://github.com/Devindin/E-commerce-web-site.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <video src={project13} alt="Web Project 4" controls />
              <h2>Restaurant website </h2>
              <h4>Key features:</h4>
              <p>better UI experience</p>
              <h4>Technologies and special functionalities:</h4>
              <p>React</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Restaurant-Web-site-using-React.git">
                https://github.com/Devindin/Restaurant-Web-site-using-React.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <video src={project17} alt="Web Project 4" controls />
              <h2>Web Interface for Thapro Coin project</h2>
              <h4>Key features:</h4>
              <p>Dynamic web page</p>
              <h4>Technologies and special functionalities:</h4>
              <p>HTML ,CSS , Java Script</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Thapro-coin-web.git">
                https://github.com/Devindin/Thapro-coin-web.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <video src={project8} alt="Web Project 4" controls />
              <h2>Hospital website </h2>
              <h4>Key features:</h4>
              <p>User can view about doctors and hospital.</p>
              <p>User can login to the website and make appointments </p>
              <h4>Technologies and special functionalities:</h4>
              <p>HTML ,CSS , Java Script , PHP </p>
              <p>My SQL</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Hospital.git">
                https://github.com/Devindin/Hospital.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <video src={project5} alt="Web Project 4" controls />
              <h2>Personal Portfolio website </h2>
              <h4>Key features:</h4>
              <p>Responsive</p>
              <h4>Technologies and special functionalities:</h4>
              <p>HTML ,CSS ,Javascript</p>
              <p>And connected to google sheet .</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/portfolio.git">
                https://github.com/Devindin/portfolio.git
              </a>
              <a></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebApplication;
