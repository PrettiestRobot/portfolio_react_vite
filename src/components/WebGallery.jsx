import { useRef, useState, useEffect } from "react";
import ShowCard from "./ShowCard";
import ArrowUp from "/images/arrow_upward_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import ArrowDown from "/images/arrow_downward_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import Close from "/images/cancel_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import GitHubLogo from "../assets/github-mark.svg";

function WebGallery({ data }) {
  const [selectedData, setSelectedData] = useState(null);
  const [loadingImagesCount, setLoadingImagesCount] = useState(data.length);
  const [webInfoActive, setWebInfoActive] = useState(false);

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

  const toggleWebInfo = () => {
    setWebInfoActive((prev) => !prev);
  };

  return (
    <div className="projects-gallery-container">
      <div className={`gallery-nav ${selectedData ? "show-active" : ""}`}>
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
      </div>
      {loadingImagesCount > 0 && <div className="loader">Loading...</div>}
      <div className="projects-gallery" ref={GalleryRef}>
        <div
          className={`web-gallery-container ${
            loadingImagesCount === 0 ? "loaded" : ""
          }`}
        >
          {data.map((data) => (
            <div
              key={data.id}
              className="web-gallery-item"
              onClick={() => handleItemClick(data)}
            >
              <div className="web-item-top">
                <h2>{data.name}</h2>
                <a className="web-git-link" href={data.git} target="blank">
                  <svg
                    className="git-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 98 96"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      className="git-icon-fill"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      fill="#231F20"
                    />
                  </svg>
                </a>
              </div>
              <div className="web-item-bottom" onClick={toggleWebInfo}>
                {!webInfoActive ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="web-info-icon"
                  >
                    <path
                      className="web-info-fill"
                      d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                      fill="#fff"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="web-info-icon"
                  >
                    <path
                      className="web-info-fill"
                      d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                      fill="#fff"
                    />
                  </svg>
                )}
              </div>
              <div
                className={`web-item-info ${
                  webInfoActive ? "web-info-active" : ""
                }`}
              >
                <p>{data.description}</p>
                <p>{data.technology}</p>
              </div>
              <img
                className="web-gallery-img"
                onLoad={handleImageLoad}
                onError={handleImageError}
                src={data.image}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className={`show-card-container ${selectedData ? "active" : ""}`}>
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
      </div> */}
    </div>
  );
}

export default WebGallery;
