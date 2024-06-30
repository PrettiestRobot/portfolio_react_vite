import { useRef, useState } from "react";
import ShowCard from "./ShowCard";

function Gallery({ data }) {
  const [selectedData, setSelectedData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const handleImageLoad = () => {
    setLoaded(true);
  };

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

  const handleItemClick = (itemData) => {
    setSelectedData(itemData);
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
      <div
        className={`gallery-container ${loaded ? "loaded" : ""}`}
        ref={horzGalleryRef}
      >
        {data.map((data) => (
          <div
            key={data.id}
            style={{
              gridArea: `${data.row} / ${data.column}`,
            }}
            className="gallery-item"
            onClick={() => handleItemClick(data)}
          >
            <img onLoad={handleImageLoad} src={data.image} />
          </div>
        ))}
      </div>
      <div className={`show-card-container ${selectedData ? "active" : ""}`}>
        {selectedData && (
          <ShowCard
            cardData={selectedData}
            handleCardClose={() => setSelectedData(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Gallery;
