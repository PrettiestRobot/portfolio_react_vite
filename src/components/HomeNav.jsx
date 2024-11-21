import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <div className="home-nav-container">
      <Link className="home-nav-category commercial" to="/commercial">
        <div className="home-nav-title">
          <h1>Commercial</h1>
        </div>
      </Link>
      <Link className="home-nav-category personal" to="personal">
        <div className="home-nav-title">
          <h1>Personal</h1>
        </div>
      </Link>
      <Link className="home-nav-category motion" to="/motion">
        <div className="home-nav-title">
          <h1>Motion</h1>
        </div>
      </Link>
      <Link className="home-nav-category web" to="/web">
        <div className="home-nav-title">
          <h1>Web</h1>
        </div>
      </Link>
    </div>
  );
}

export default HomeNav;
