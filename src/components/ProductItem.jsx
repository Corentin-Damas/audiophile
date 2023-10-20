import { NavLink } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <div className="product__grid">
      <div className="product__info">
        {product.new && <p className="overline u-orange">New product</p>}
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <NavLink to={`/${product.slug}`}>
          <button className="orange">See product</button>
        </NavLink>
      </div>
      <div className="product__img">
        <img src={product.image.desktop} alt="product" />
      </div>
    </div>
  );
}

export default ProductItem;
