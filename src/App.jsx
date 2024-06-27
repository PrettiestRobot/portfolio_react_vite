import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
export default App;
