function Block({ blockData }) {
  return (
    <div className="gallery-block">
      <div className="block-resume">
        <button>Resume</button>
      </div>
      <div className="block-text">
        <h2>{blockData.title}</h2>
        <p>{blockData.description} </p>
      </div>
    </div>
  );
}

export default Block;
