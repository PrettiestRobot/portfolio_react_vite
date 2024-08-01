import { useState } from "react";
import Info from "/images/info_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import Close from "/images/cancel_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

function Block({ blockData }) {
  const [infoActive, setInfoActive] = useState(false);

  const toggleInfo = () => {
    setInfoActive((prev) => !prev);
  };

  return (
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
      <div className="block-info-container">
        <div
          className={`block-text-container ${infoActive ? "info-active" : ""}`}
        >
          <div className="block-text" onClick={toggleInfo}>
            <h2>{blockData.title}</h2>
            <p>{blockData.description} </p>
          </div>
          <div className="info-button-container">
            <button className="info-button" onClick={toggleInfo}>
              <img src={infoActive ? Close : Info} alt="Toggle Info" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block;
