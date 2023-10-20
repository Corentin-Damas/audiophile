import BringYour from "./ui/BringYour";
import Footer from "./Footer";
import Nav from "./ui/Nav";
import VisualNav from "./ui/VisualNav";
import ProductContent from "./ProductContent";

function Speakers() {
  return (
    <div className="product">
      <div className="product__header">
        <Nav />
        <h1 className="product__header-title">Speakers</h1>
      </div>
      <ProductContent product={"speakers"}/>
      <VisualNav />
      <BringYour />
      <Footer />
    </div>
  );
}

export default Speakers;
