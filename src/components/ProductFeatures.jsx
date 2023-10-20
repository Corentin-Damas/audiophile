import { NavLink } from "react-router-dom";

function ProductFeatures({ dataProduct }) {
  return (
    <div className="productPage__container">
      <div className="productPage__cta">
        <img src={dataProduct.image.desktop} alt="" />
        <div className="productPage__cta-right">
          {dataProduct.new && (
            <p className="u-margin-bot-16 overline u-orange">New product</p>
          )}
          <h2 className="u-margin-bot-32">{dataProduct.name}</h2>
          <p className="u-margin-bot-32">{dataProduct.description}</p>
          <h4 className="u-margin-bot-46">
            ${new Intl.NumberFormat("de-DE").format(dataProduct.price)}
          </h4>
          <div className="cta__toadd">
            <div className="cta__calculator">
              <button className="btn-math">-</button>
              <p className="result u-bold">1</p>

              <button className="btn-math">+</button>
            </div>

            <button className="orange u-margin-left-16">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="productPage__features">
        <div className="productPage__features-g">
          <h3 className="u-margin-bot-32">Features</h3>
          <p>{dataProduct.features}</p>
        </div>
        <div className="productPage__features-g">
          <h3 className="u-margin-bot-32">In the box</h3>
          {dataProduct.includes.map((el) => (
            <div className="productPage__features-items">
              <p className="u-orange">{el.quantity}x</p>
              <p>{el.item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="productPage__gallery">
        <img
          className="productPage__gallery-1"
          src={dataProduct.gallery.first.desktop}
          alt=""
        />
        <img
          className="productPage__gallery-2"
          src={dataProduct.gallery.second.desktop}
          alt=""
        />
        <img
          className="productPage__gallery-3"
          src={dataProduct.gallery.third.desktop}
          alt=""
        />
      </div>
      <div className="productPage__recommendations">
        <h2 className="productPage__recommendations-title">You may also like</h2>
        <div className="productPage__recommendations-row">

        {dataProduct.others.map((el) => (
            <div className="productPage__recommendations-el">
            <img className="productPage__recommendations-img" src={el.image.desktop} alt="" />
            <h3>{el.name}</h3>
            <NavLink to={`/${el.slug}`}>

            <button className="orange">See Product</button>
            </NavLink>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default ProductFeatures;
