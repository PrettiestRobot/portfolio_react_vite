import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="nav">
      <Link to="/" className="site-title nav-link name">
        <span className="brand-span-c"> &lt; </span>
        <span className="brand-span-a">Thomas</span> Rose
        <span className="brand-span-b">: Meyer</span>
        <span className="brand-span-c"> /&gt; </span>
      </Link>
      <ul>
        <li>
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link nav-active" : "nav-link"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={
              currentPage === "/projects" ? "nav-link nav-active" : "nav-link"
            }
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={
              currentPage === "/contact" ? "nav-link nav-active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={
              currentPage === "/resume" ? "nav-link nav-active" : "nav-link"
            }
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
