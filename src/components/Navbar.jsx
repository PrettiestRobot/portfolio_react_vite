import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import GitHubLogo from "../assets/github-mark.svg";
import LinkedinLogo from "../assets/linkedin.svg";
import FacebookLogo from "../assets/facebook.svg";
import LogoType from "../assets/Brand_Logotype.svg";
import GitHubLogoM from "../assets/github-mark_light.svg";
import LinkedinLogoM from "../assets/linkedin_light.svg";
import FacebookLogoM from "../assets/facebook_light.svg";

function Navbar() {
  const currentPage = useLocation().pathname;
  const [navOpen, setNavOpen] = useState(false);
  const toggleBurger = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="site-title nav-link name">
            <img className="nav-logotype" src={LogoType} />
          </Link>
        </div>
        <div
          onClick={toggleBurger}
          id="nav-burger"
          className={`nav-burger ${navOpen ? "nav-open" : ""}`}
        >
          <div className="burger-bar bar-1"></div>
          <div className="burger-bar bar-2"></div>
          <div className="burger-bar bar-3"></div>
        </div>
        <div className="nav-right">
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
              <img src={GitHubLogo}></img>
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-rose-meyer-58b257104/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinLogo}></img>
            </a>
            <a
              href="https://www.facebook.com/prettiestrobot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookLogo}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="nav-btn-container">
        <Link
          to="/commercial"
          id="b1"
          className={`nav-page-link b1 ${
            currentPage === "/commercial" ? "active" : ""
          }`}
        >
          <div className="nav-link-text">Commercial</div>
        </Link>
        <Link
          to="/personal"
          id="b2"
          className={`nav-page-link b2 ${
            currentPage === "/personal" ? "active" : ""
          }`}
        >
          <div className="nav-link-text">Personal</div>
        </Link>
        <Link
          to="/motion"
          id="b3"
          className={`nav-page-link b3 ${
            currentPage === "/motion" ? "active" : ""
          }`}
        >
          <div className="nav-link-text">Motion</div>
        </Link>
        <Link
          to="/web"
          id="b4"
          className={`nav-page-link b4 ${
            currentPage === "/web" ? "active" : ""
          }`}
        >
          <div className="nav-link-text">Web</div>
        </Link>
      </div>
      <div
        className={`mobile-nav-container ${navOpen ? "nav-open" : ""}`}
        onClick={toggleBurger}
      >
        <div className={`mobile-nav ${navOpen ? "nav-open" : ""}`}>
          <Link
            to="/"
            id="b0"
            className={`mobile-nav-page-link b0 ${
              currentPage === "/" ? "active" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/commercial"
            className={`mobile-nav-page-link b1 ${
              currentPage === "/commercial" ? "active" : ""
            }`}
          >
            Commercial
          </Link>
          <Link
            to="/personal"
            className={`mobile-nav-page-link b2 ${
              currentPage === "/personal" ? "active" : ""
            }`}
          >
            Personal
          </Link>
          <Link
            to="/motion"
            className={`mobile-nav-page-link b3 ${
              currentPage === "/motion" ? "active" : ""
            }`}
          >
            Motion
          </Link>
          <Link
            to="/web"
            className={`mobile-nav-page-link b4 ${
              currentPage === "/web" ? "active" : ""
            }`}
          >
            Web
          </Link>
          <div className="mobile-nav-buttons">
            <a
              href="https://github.com/PrettiestRobot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHubLogoM}></img>
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-rose-meyer-58b257104/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinLogoM}></img>
            </a>
            <a
              href="https://www.facebook.com/prettiestrobot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookLogoM}></img>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
