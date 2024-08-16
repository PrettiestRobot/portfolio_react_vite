import { useState } from "react";

function ShowCard({ cardData }) {
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setImageIndex(index);
  };

  const renderSpans = (textArray) => {
    return textArray.map((item, index) => {
      if (typeof item === "string") {
        return item;
      } else if (item.type === "highlight") {
        return (
          <span key={index} className="highlight">
            {item.content}
          </span>
        );
      }
    });
  };
  return (
    <div className="show-card">
      <div className="show-card-top">
        <div className="show-card-images-container">
          <a
            className="show-card-image-container"
            href={cardData.image[imageIndex]}
            target="blank"
          >
            <img src={cardData.image[imageIndex]} />
          </a>
          <div className="show-card-gallery">
            {cardData.image.map((image, index) => (
              <div
                className={`show-card-gallery-image-container ${
                  index === imageIndex ? "image-active" : ""
                }`}
                key={index}
                onClick={() => handleImageChange(index)}
              >
                <img src={image} className="show-card-gallery-image" />
              </div>
            ))}
          </div>
        </div>

        <div className="show-card-body">
          <h1 className="show-card-body-title">
            {renderSpans(cardData.title)}
          </h1>
          <h2 className="show-card-body-subtitle">{cardData.name}</h2>
          <p className="show-card-body-text">{cardData.description}</p>
          <p className="show-card-body-tech">
            created with: {cardData.technology}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
