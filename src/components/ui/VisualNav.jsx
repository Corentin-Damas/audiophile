import { NavLink } from "react-router-dom";

function VisualNav() {
  return (
    <div className="visual__nav">
      <div className="visual__nav-box">
        <img
          className="visual__nav-img"
          src="./src/assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt=""
        />
        <h6>headphones</h6>
        <NavLink to="/headphones">
          <button className="btn-2">
            Shop <span className="arrow">&#129170;</span>
          </button>
        </NavLink>
      </div>
      <div className="visual__nav-box">
        <img
          className="visual__nav-img"
          src="./src/assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt=""
        />
        <h6>speakers</h6>
        <NavLink to="/headphones">
          <button className="btn-2">
            Shop <span className="arrow">&#129170;</span>
          </button>
        </NavLink>
      </div>
      <div className="visual__nav-box">
        <img
          className="visual__nav-img"
          src="./src/assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt=""
        />
        <h6>Earphones</h6>
        <NavLink to="/headphones">
          <button className="btn-2">
            Shop <span className="arrow">&#129170;</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default VisualNav;
