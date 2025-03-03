import "./Education.scss";

import information from "../../data/information.json";

import { Calendar, Pin } from "../../assets/icons.jsx";

function Education() {
  return (
    <section className="education">
      <h2>Education</h2>
      {information.education.map((edu, index) => (
        <div key={index} className="education-content">
          <h3>{edu.degree}</h3>
          <p>{edu.brief}</p>
          <div className="education-info">
            <p>
              <a href={edu.link} target="_blank" rel="noopener noreferrer">
                {edu.institution}
              </a>
            </p>
            <p><Calendar />{edu.start_date} - {edu.end_date}</p>
            <p><Pin />{edu.location}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Education;
