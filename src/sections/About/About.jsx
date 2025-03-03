import "./About.scss";

import information from "../../data/information.json";

function About() {
  const { name, description } = information;

  return (
    <section className="about">
        <p>I&apos;m <span>{name}</span>, {description}</p>
    </section>
  );
}

export default About;
