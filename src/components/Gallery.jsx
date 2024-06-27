import { useRef, useState } from "react";

function Gallery({ data }) {
  const horzGalleryRef = useRef(null);
  const [leftBtnActive, setLeftBtnActive] = useState(false);
  const [rightBtnActive, setRightBtnActive] = useState(true);

  const scrollLeft = () => {
    horzGalleryRef.current.scrollBy({
      left: -horzGalleryRef.current.offsetWidth,
      behavior: "smooth",
    });
    setRightBtnActive(true);
    setLeftBtnActive(false);
  };

  const scrollRight = () => {
    horzGalleryRef.current.scrollBy({
      left: horzGalleryRef.current.offsetWidth,
      behavior: "smooth",
    });
    setLeftBtnActive(true);
    setRightBtnActive(false);
  };

  return (
    <div className="projects-gallery">
      <div className="gallery-nav">
        <button
          className={`gallery-nav-btn ${
            leftBtnActive ? "gallery-nav-active" : ""
          }`}
          onClick={scrollLeft}
        >
          {"<"}
        </button>
        <button
          className={`gallery-nav-btn ${
            rightBtnActive ? "gallery-nav-active" : ""
          }`}
          onClick={scrollRight}
        >
          {">"}
        </button>
      </div>
      <div className="gallery-container" ref={horzGalleryRef}>
        {data.map((data) => (
          <div
            key={data.id}
            style={{
              gridArea: `${data.row} / ${data.column}`,
            }}
            className="gallery-item"
          >
            <img src={data.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
