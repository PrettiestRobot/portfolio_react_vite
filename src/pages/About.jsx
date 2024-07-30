import self from "../assets/self_edit.png";
import "../styles/App.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about">
        <div className="self">
          <img src={self} alt="An image of Thomas Rose-Meyer" />
        </div>
      </div>

      <div className="gallery-block">
        <div className="block-resume">
          <button className="resume-button">Resume</button>
        </div>
        <div className="about-block-info-container">
          <div className="about-block-text-container">
            <div className="about-block-text">
              <h2>About Me:</h2>
              <p>
                Hi, I'm Thomas Rose-Meyer. With over 10 years of experience in
                print graphics and learning resources being more accessible than
                ever, now seemed like the perfect time to transition to a career
                in web development. As a detail-oriented and design-savvy
                individual, I am confident in my ability to create visually
                appealing and user-friendly websites. I am a lifelong learner
                who is always seeking to improve my skills and stay up-to-date
                with the latest technologies in the field. I am excited to bring
                my unique perspective and passion for web development to a new
                role and contribute to the continued growth of the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
