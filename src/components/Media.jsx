import { useRef, useState, useEffect } from "react";
import ShowCard from "./ShowCard";
import ArrowUp from "/images/arrow_upward_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import ArrowDown from "/images/arrow_downward_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

function Media({ data }) {
  return (
    <div className="video-container">
      <iframe
        width="600"
        src="https://youtube.com/embed/BvyFCyFCmzs"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Media;
