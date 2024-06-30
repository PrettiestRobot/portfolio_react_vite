import self from "../assets/self.png";
import "../styles/App.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about">
        <h1>About Me</h1>
        <div className="self">
          <img src={self} alt="An image of Thomas Rose-Meyer" />
        </div>
        <p>
          Hi. I'm Thomas Rose-Meyer. With over 10 years of experience in print
          graphics and learning recources being more accessible than ever , now
          seemed like a perfect time to transition to a career in web
          development. As a detail-oriented and design-savvy individual, I am
          confident in my ability to create visually appealing and user-friendly
          websites. I am a lifelong learner who is always seeking to improve my
          skills and stay up-to-date with the latest technologies in the field.
          I am excited to bring my unique perspective and passion for web
          development to a new role and contribute to the continued growth of
          the industry.
        </p>
      </div>
    </div>
  );
}
