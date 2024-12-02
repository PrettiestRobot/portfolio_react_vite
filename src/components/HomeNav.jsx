import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <div className="home-nav-container">
      <Link className="home-nav-category" to="/commercial">
        <div className="link-image-container commercial">
          <img
            className="link-image "
            src="https://firebasestorage.googleapis.com/v0/b/twrosemeyer-portfolio.appspot.com/o/commercial%2FKupo_Mockup.jpeg?alt=media&token=97269f20-1f52-46b4-a221-ff9055856a1a"
          />
        </div>
        <h1 className="home-nav-title">Commercial</h1>
      </Link>
      <Link className="home-nav-category" to="personal">
        <div className="link-image-container personal">
          <img
            className="link-image "
            src="https://firebasestorage.googleapis.com/v0/b/twrosemeyer-portfolio.appspot.com/o/illustrations%2FProgress.jpeg?alt=media&token=8667bc56-b3f7-46df-afaa-2b41dc8fe667"
          />
        </div>

        <h1 className="home-nav-title">Personal</h1>
      </Link>
      <Link className="home-nav-category" to="/motion">
        <div className="link-image-container motion">
          <img
            className="link-image "
            src="https://firebasestorage.googleapis.com/v0/b/twrosemeyer-portfolio.appspot.com/o/motion%20graphics%2FNeon%20Sign%20Sample.png?alt=media&token=47cf4a7c-5d50-436c-b4f1-d0ca122b43c2"
          />
        </div>

        <h1 className="home-nav-title">Motion</h1>
      </Link>
      <Link className="home-nav-category" to="/web">
        <div className="link-image-container web">
          <img
            className="link-image "
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <h1 className="home-nav-title">Web</h1>
      </Link>
    </div>
  );
}

export default HomeNav;
