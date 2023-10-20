import { getData } from "../data/apiAudio";
import {
  NavLink,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";

import Nav from "./ui/Nav";
import Footer from "./Footer";
import VisualNav from "./ui/VisualNav";
import BringYour from "./ui/BringYour";
import ProductFeatures from "./ProductFeatures";

function ProductDetail() {
  const data = useLoaderData();
  let { productSlug } = useParams();
  const navigate = useNavigate();

  return data.map((el) =>
    productSlug === el.slug ? (
      <div>
        <div className="navUnique">
          <Nav />
        </div>
        <p className="btn-back" onClick={() => navigate(-1)}>Go back</p>

        <ProductFeatures dataProduct={el} />
        <VisualNav />
        <BringYour />
        <Footer />
      </div>
    ) : (
      ""
    )
  );
}

export async function loader() {
  const data = await getData();
  return data;
}

export default ProductDetail;
