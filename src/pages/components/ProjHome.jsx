import React from "react";
import proj_img from "../../Image/proj_img.png";
import Githubcomp from "./Githubcomp";
import "./ProjHome.css";
function ProjHome() {
  return (
    <>
      <div className="proj_containar_section">
        <div className="proj_left">
          <h1>Projects & Experiences</h1>
          <div>
            <h3>Research Assistant</h3>
            <h4>University of New Orleans</h4>
            <br/>
            <ul>
              <li>Implemented advanced algorithms, such as sensor fusion, Kalman Filter, and Odometry, resulting in a 15% improvement in the accuracy of a Parrot Bebop2 Drone Controller.</li>
              <li>Evaluated a State Estimator Program through rigorous unit-testing of LQR controllers and Particle Filters in ROS, C++, and Python, enhancing system reliability.</li>
              <li>Engineered a safety-integrated Dynamic Window Approach, propelling a Roomba robot to achieve an 18% boost in speed and security within complex environments.</li>
              <li>Crafted a dynamic GUI automating the initialization process of all robot components, reducing set-up time by 26%.</li>
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
