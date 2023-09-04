import "../styles/Projects.css";
import sample1 from "../assets/sample1_screenshot.png";
import sample2 from "../assets/marvel_longbox_screenshot.png";
import sample3 from "../assets/dear_diary_screenshot.jpg";
import sample4 from "../assets/art_square_screenshot.png";
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
                <a
                  href="https://prettiestrobot.github.io/module-01-challenge-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Horiseon</h2>
                </a>

                <a
                  href="https://github.com/PrettiestRobot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo}></img>
                </a>
              </div>
              <h3>Semantic HTML</h3>
            </div>
            <img src={sample1}></img>
          </div>
        </div>
        <div className="project">
          <div className="project-card">
            <div className="project-info">
              <div className="project-card-head">
                <a
                  href="https://github.com/PrettiestRobot?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Marvel Long Box</h2>
                </a>

                <a
                  href="https://github.com/PrettiestRobot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo}></img>
                </a>
              </div>
              <h3>Front End API</h3>
            </div>
            <img src={sample2}></img>
          </div>
        </div>
        <div className="project">
          <div className="project-card">
            <div className="project-info">
              <div className="project-card-head">
                <a
                  href="https://personal-journal-e23df6a117fd.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Dear Diary</h2>
                </a>
                <a
                  href="https://github.com/Dinh282/personal-journal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo}></img>
                </a>
              </div>
              <h3>Full Stack SQL App</h3>
            </div>
            <img src={sample3}></img>
          </div>
        </div>
        <div className="project">
          <div className="project-card">
            <div className="project-info">
              <div className="project-card-head">
                <a
                  href="https://64f61c9212b13803dc748dac--majestic-moonbeam-1117aa.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Art Sqaure</h2>
                </a>
                <a href="https://github.com/PrettiestRobot">
                  <img src={githubLogo}></img>
                </a>
              </div>
              <h3>MERN stack REACt + Vite</h3>
            </div>
            <img src={sample4}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
