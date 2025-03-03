import "./Footer.scss";

import { Arrow } from "../../assets/icons.jsx";

function Footer() {
  return (
    <footer>
      <div className="footer-text">
        <p>© 2024</p>
      </div>
      <div className="footer-button">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Arrow />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
