import { useLocation } from "react-router-dom";
import Block from "../components/Block";
import Gallery from "../components/Gallery";
import Gallery2 from "../components/Gallery2";
import Media from "../components/Media";
import WebGallery from "../components/WebGallery";

function Projects({ data, blockData }) {
  const location = useLocation();
  const path = location.pathname;

  const galleryComponents = {
    "/web": <WebGallery data={data} />,
    "/motion": <Media data={data} />,
    "/personal": <Gallery data={data} />,
    "/commercial": <Gallery data={data} />,
  };

  const GalleryComponent = galleryComponents[path];
  return (
    <div className="projects">
      {GalleryComponent}
      <Block blockData={blockData} />
    </div>
  );
}
export default Projects;
