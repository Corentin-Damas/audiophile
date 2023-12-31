import { NavLink } from "react-router-dom";

function HomeHeader() {
  return (
    <div className="header__home">
      <p className="overline u-grey">New product</p>
      <h1 className="u-white">
        XX 99 MARK II <br />
        headphones
      </h1>
      <p className="header__home-text u-white">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <NavLink to="/xx99-mark-two-headphones">

      <button className="orange">
        See product
      </button>
      </NavLink>
    </div>
  );
}

export default HomeHeader;
