import "./Experience.scss";

import information from "../../data/information.json";

import { Link } from "../../assets/icons.jsx";

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>
      {information.experience.map((exp, index) => (
        <div key={index} className="experience-content">
          <time>{exp.start_date} - {exp.end_date}</time>
          <div className="position-company">
            <h3>{exp.position}</h3>
            <a href={exp.link} target="_blank" rel="noopener noreferrer">
              <span>{exp.company}</span><Link />
            </a>
          </div>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
