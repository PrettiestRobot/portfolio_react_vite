import "../styles/Footer.css";
import githubLogo from "../assets/github-mark.svg";
import linkedinLogo from "../assets/linkedin.svg";
import facebookLogo from "../assets/facebook.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-links">
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
    </footer>
  );
}

export default Footer;
