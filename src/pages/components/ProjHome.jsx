import React from "react";
import proj_img from "../../Image/proj_img.png";
import Githubcomp from "./Githubcomp";
import "./ProjHome.css";
function ProjHome() {
  return (
    <>
      <div className="proj_containar_section">
        <div className="proj_left">
          <h1>Experiences & Projects</h1>
          <div>
            <h3>Software Engineer Intern</h3>
            <h4>Bentley Systems</h4>
            <br/>
            <ul>
              <li>Collaborated with a cross-functional team throughout the Product LifeCycle to design the AssetWise Inspections mobile app, facilitating efficient data capture, analysis, and management of assets for over 5000 users.</li>
              <li>Designed custom mobile components that improved UI consistency and reduced development time by 27% across Android and iOS projects.</li>
              <li>Developed backend API endpoints for frontend data fetching using agile methodologies to ensure efficient delivery.</li>
              <li>Tools: TypeScript, React-Native, C#, ASP.NET, Microsoft SQL Server, Realm Database, Swagger</li>
            </ul>
          </div>
          <div>
            <h3>Research Assistant</h3>
            <h4>Autonomous Intelligent Robotics Lab, UNO</h4>
            <br/>
            <ul>
              <li>Engineered a real-time detection algorithm for localizing drones using various Machine Learning models and following the Software Development LifeCycle (SDLC) to surpass traditional techniques in detecting fiducial markers.</li>
              <li>Trained Deep Neural Networks and conducted unit-testing for improving the Roomba robot’s precision in Computer Vision techniques for obstacle avoidance by 32%.</li>
              <li>Created a lab management website to streamline task tracking and organize deadlines and documents for conferences and research papers, improving workflow efficiency by 43%.</li>
              <li>Crafted a dynamic GUI for automating the initialization process of robot components, reducing the set-up time by 21%.</li>
              <li>Tools: C++, Python, JavaScript, React, Flask, MySQL, PyTorch, Keras, Qt, QML, ROS</li>
            </ul>
          </div>
        </div>
        <div className="proj_right">
          <img src={proj_img} alt="Project Img" />
        </div>
      </div>
    </>
  );
}

export default ProjHome;
