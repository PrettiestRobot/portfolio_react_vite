import { Link, useLocation } from "react-router-dom";
import githubLogo from "../assets/github-mark.svg";
import linkedinLogo from "../assets/linkedin.svg";
import facebookLogo from "../assets/facebook.svg";
import LogoType from "../assets/Brand_Logotype.svg";

function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="site-title nav-link name">
          <img className="nav-logotype" src={LogoType} />
        </Link>
        <div className="nav-links">
          <Link
            to="/"
            className={`about-link ${currentPage === "/" ? "active" : ""}`}
          >
            About
          </Link>
          <a
            href="https://github.com/PrettiestRobot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo}></img>
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-rose-meyer-58b257104/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo}></img>
          </a>
          <a
            href="https://www.facebook.com/prettiestrobot/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookLogo}></img>
          </a>
        </div>
      </div>
      <div className="nav-btn-container">
        <Link
          to="/commercial"
          className={`nav-page-link b1 ${
            currentPage === "/commercial" ? "active" : ""
          }`}
        >
          Commercial
        </Link>
        <Link
          to="/personal"
          className={`nav-page-link b2 ${
            currentPage === "/personal" ? "active" : ""
          }`}
        >
          Personal
        </Link>
        <Link
          to="/motion"
          className={`nav-page-link b3 ${
            currentPage === "/motion" ? "active" : ""
          }`}
        >
          Motion
        </Link>
        <Link
          to="/web"
          className={`nav-page-link b4 ${
            currentPage === "/web" ? "active" : ""
          }`}
        >
          Web
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
