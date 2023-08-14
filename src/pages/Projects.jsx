import "../styles/Projects.css";
import sample1 from "../assets/sample1_screenshot.png";
import sample2 from "../assets/marvel_longbox_screenshot.png";
import sample3 from "../assets/dear_diary_screenshot.jpg";
import githubLogo from "../assets/github-mark.svg";
import placeholder from "../assets/patrick-tomasso-QMDap1TAu0g-unsplash.jpg";

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project">
          <div className="project-card">
            <div className="project-info">
              <div className="project-card-head">
                <h2>Project Title</h2>
                <a href="https://github.com/PrettiestRobot">
                  <img src={githubLogo}></img>
                </a>
              </div>
              <h2>Project Type</h2>
            </div>
            <img src={sample1}></img>
          </div>
        </div>
        <div className="project">
          <img src={sample2}></img>
        </div>
        <div className="project">
          <img src={sample3}></img>
        </div>
        <div className="project">
          <img src={placeholder}></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
