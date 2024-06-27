import Block from "../components/Block";
import Gallery from "../components/Gallery";

function Projects({ data }) {
  return (
    <div className="projects">
      <Gallery data={data} />
      <Block />
    </div>
  );
}

export default Projects;
