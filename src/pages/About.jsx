import self from "../assets/self_edit.png";
import "../styles/App.css";
import HomeNav from "../components/HomeNav";

export default function About() {
  return (
    <div className="about">
      <HomeNav />

      <div className="gallery-block">
        <div className="block-resume">
          <a
            href="/Thomas_Meyer_Resume_2024.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="resume-button"
          >
            Resume
          </a>
        </div>
        <div className="about-block-info-container">
          <div className="about-block-text-container">
            <div className="about-block-text">
              <h2>About Me:</h2>
              <p>
                Hi, I'm Thomas. I'm a graphic designer, web developer and all
                around swell guy. I've been working in the print industry for
                10+ years and I specialize in tactile designs that emphasize
                textures and grit. If left to my own devices I will always come
                up with something that looks like it was pulled from an attic or
                a someones tacky estate sale, but I'm always happy to slap some
                helvetica on a grid and deliver designs crisp, clean and
                eloquent designs on request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
