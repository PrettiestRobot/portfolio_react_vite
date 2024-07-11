import Block from "../components/Block2";
import Gallery from "../components/Gallery2";

function Projects({ data }) {
  const { projectData, blockData } = data[0];

  return (
    <div className="projects">
      <Gallery data={projectData} />
      {/* <Block blockData={data.blockData} /> */}
    </div>
  );
}

export default Projects;
