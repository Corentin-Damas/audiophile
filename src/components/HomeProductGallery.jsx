import { NavLink } from "react-router-dom";

function HomeProductGallery() {
  return (
    <div className="home-display__container">
      <div className="home-display__p1">
        <img
          className="home-display__p1-img"
          src="./src/assets/home/desktop/image-speaker-zx9.png"
          alt=""
        />
        <div className="home-display__p1-right">
          <h1>
            ZX9 <br /> Speaker
          </h1>
          <p className="home-display__p1-text">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <NavLink to="zx9-speaker">
            <button className="black">See product</button>
          </NavLink>
        </div>
      </div>
      <div className="home-display__p2">
        <h2>zx7 speaker</h2>
        <NavLink to="zx7-speaker">
          <button className="white">See product</button>
        </NavLink>
      </div>
      <div className="home-display__p3">
        <div className="home-display__p3-left"></div>
        <div className="home-display__p3-right">
          <h2>YX1 earphones</h2>
          <NavLink to="yx1-earphones">
            <button className="white">See product</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HomeProductGallery;
