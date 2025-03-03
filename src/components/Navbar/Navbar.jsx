import "./Navbar.scss";

import information from "../../data/information.json";

import {
  GitHub,
  Instagram,
  LightBulb,
  LightBulbOff,
  LinkedIn,
} from "../../assets/icons.jsx";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(false);

  const switchTheme = () => {
    setTheme(!theme);
  };

  return (
    <nav>
      <span onClick={() => {navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" })}}>
        {information.nickname}
      </span>
      <div className="items">
        <a href={information.links.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </a>
        <a href={information.links.instagram} target="_blank" rel="noopener noreferrer">
          <Instagram />
        </a>
        <a href={information.links.github} target="_blank" rel="noopener noreferrer">
          <GitHub />
        </a>
        <button onClick={switchTheme}>
          {theme ? <LightBulb /> : <LightBulbOff />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
