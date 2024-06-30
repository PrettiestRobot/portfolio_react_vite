import Block from "../components/Block";
import Gallery from "../components/Gallery";

function Projects({ data, blockData }) {
  return (
    <div className="projects">
      <Gallery data={data} />
      <Block blockData={blockData} />
    </div>
  );
}

export default Projects;
