import BringYour from "./ui/BringYour";
import Footer from "./Footer";
import Nav from "./ui/Nav";
import VisualNav from "./ui/VisualNav";
import ProductContent from "./ProductContent";

function Headphones() {
  return (
    <div className="product">
      <div className="product__header">
        <Nav />
        <h1 className="product__header-title">Headphones</h1>
      </div>
      <ProductContent product={"headphones"}/>
      <VisualNav />
      <BringYour />
      <Footer />
    </div>
  );
}

export default Headphones;
