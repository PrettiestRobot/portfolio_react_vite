import { useRef, useState, useEffect } from "react";
import ShowCard from "./ShowCard";
import ArrowUp from "/images/arrow_upward_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import ArrowDown from "/images/arrow_downward_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import Close from "/images/cancel_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

function Gallery({ data }) {
  const [selectedData, setSelectedData] = useState(null);
  const [loadingImagesCount, setLoadingImagesCount] = useState(data.length);

  useEffect(() => {
    setSelectedData(null);
  }, [data]);

  const handleImageLoad = () => {
    setLoadingImagesCount((prevCount) => prevCount - 1);
  };

  const handleImageError = () => {
    setLoadingImagesCount((prevCount) => prevCount - 1);
  };

  const GalleryRef = useRef(null);
  const [upBtnActive, setUpBtnActive] = useState(false);
  const [downBtnActive, setDownBtnActive] = useState(true);

  const scrollUp = () => {
    if (GalleryRef.current.scrollTop > 0) {
      GalleryRef.current.scrollBy({
        top: -GalleryRef.current.offsetHeight,
        behavior: "smooth",
      });
      setDownBtnActive(true);
    }
    if (GalleryRef.current.scrollTop <= GalleryRef.current.offsetHeight) {
      setUpBtnActive(false);
    }
  };

  const scrollDown = () => {
    if (
      GalleryRef.current.scrollTop <
      GalleryRef.current.scrollHeight - GalleryRef.current.offsetHeight
    ) {
      GalleryRef.current.scrollBy({
        top: GalleryRef.current.offsetHeight,
        behavior: "smooth",
      });
      setUpBtnActive(true);
    }
    if (
      GalleryRef.current.scrollTop >=
      GalleryRef.current.scrollHeight - GalleryRef.current.offsetHeight * 2
    ) {
      setDownBtnActive(false);
    }
  };

  const handleItemClick = (itemData) => {
    setSelectedData(itemData);
  };

  return (
    <div className="projects-gallery-container">
      {/* <div className={`gallery-nav ${selectedData ? "show-active" : ""}`}>
        <button
          className={`gallery-nav-btn ${
            upBtnActive ? "gallery-nav-active" : ""
          }`}
          onClick={scrollUp}
        >
          <img src={ArrowUp} />
        </button>
        <button
          className={`gallery-nav-btn ${
            downBtnActive ? "gallery-nav-active" : ""
          }`}
          onClick={scrollDown}
        >
          <img src={ArrowDown} />
        </button>
      </div> */}
      {loadingImagesCount > 0 && <div className="loader">Loading...</div>}
      <div className="projects-gallery" ref={GalleryRef}>
        <div
          className={`gallery-container ${
            loadingImagesCount === 0 ? "loaded" : ""
          }`}
        >
          {data.map((data) => (
            <div
              key={data.id}
              className="gallery-item"
              onClick={() => handleItemClick(data)}
            >
              <img
                className="gallery-img"
                onLoad={handleImageLoad}
                onError={handleImageError}
                src={data.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`show-card-container ${selectedData ? "active" : ""}`}>
        <img
          src={Close}
          className="show-card-close"
          onClick={() => setSelectedData(null)}
        />
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
