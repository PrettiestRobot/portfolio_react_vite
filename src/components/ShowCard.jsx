function ShowCard({ cardData, handleCardClose }) {
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
    <div className="show-card" onClick={handleCardClose}>
      <div className="show-card-top">
        <div className="show-card-image-container">
          <img src={cardData.image} />
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