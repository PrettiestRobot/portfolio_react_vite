import { useRef, useState } from "react";
import ShowCard from "./ShowCard";

function Gallery({ data }) {
  const [selectedData, setSelectedData] = useState(null);
  const [loadingImagesCount, setLoadingImagesCount] = useState(data.length);
  const handleImageLoad = () => {
    setLoadingImagesCount((prevCount) => prevCount - 1);
  };

  const handleImageError = () => {
    setLoadingImagesCount((prevCount) => prevCount - 1);
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
    <div className="projects-gallery-container">
      <div className={`gallery-nav ${selectedData ? "show-active" : ""}`}>
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
      {loadingImagesCount > 0 && <div className="loader">Loading...</div>}
      <div className="projects-gallery">
        <div
          className={`gallery-container ${
            loadingImagesCount === 0 ? "loaded" : ""
          }`}
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
              <img
                onLoad={handleImageLoad}
                onError={handleImageError}
                src={data.image}
              />
            </div>
          ))}
        </div>
        <div className={`show-card-container ${selectedData ? "active" : ""}`}>
          <div
            className="show-card-close"
            onClick={() => setSelectedData(null)}
          >
            X
          </div>
          {selectedData && (
            <ShowCard
              cardData={selectedData}
              handleCardClose={() => setSelectedData(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
