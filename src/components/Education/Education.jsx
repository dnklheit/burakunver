import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="title">Education</h2>
      <div className="timeline">
        <div className="education-cards">
        <div className="timeline-item">
      <div className="ibm-card">
          <h3 className="field">Full Stack Web Development</h3>
          <h3 className="date">10/2023 - Present </h3>
          <h3 className="school">IBM Developer</h3>
          <h3 className="location">Remote</h3>
          </div>
        </div>
        <div className="timeline-item">
        <div className="itu-card">
          <h3 className="field">Data Science & Machine Learning</h3>
          <h3 className="date">12/2022 - 06/2023</h3>
          <h3 className="school">Istanbul Technical University</h3>
          <h3 className="location">Istanbul, Turkey</h3>
          </div>
        </div>
      
      </div>
        </div>
    </section>
  );
};

export default Education;
