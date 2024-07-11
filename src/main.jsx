import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Projects2 from "./pages/Projects2";
import Resume from "./pages/Resume";
import data from "./data/data.json";
import data2 from "./data/data2.json";
const {
  commercial,
  personal,
  motion,
  web,
  commercialBlock,
  personalBlock,
  motionBlock,
  webBlock,
} = data;

const { galleryData } = data2;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <About /> },
      {
        path: "/projects",
        element: <Projects2 data={galleryData} />,
      },
      {
        path: "/commercial",
        element: <Projects data={commercial} blockData={commercialBlock} />,
      },
      {
        path: "/personal",
        element: <Projects data={personal} blockData={personalBlock} />,
      },
      {
        path: "/motion",
        element: <Projects data={motion} blockData={motionBlock} />,
      },
      {
        path: "/web",
        element: <Projects data={web} blockData={webBlock} />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
