import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <About />;
      break;
    case "/projects":
      Component = <Projects />;
      break;
    case "/contact":
      Component = <Contact />;
      break;
    case "/resume":
      Component = <Resume />;
      break;
  }
  return (
    <>
      <Navbar />
      {Component}
    </>
  );
}
export default App;
