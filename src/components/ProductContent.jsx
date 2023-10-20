import { useLoaderData } from "react-router-dom";
import { getData } from "../data/apiAudio";
import ProductItem from "./ProductItem";

function ProductContent({ product }) {
  const data = useLoaderData();

  return (
    <div className="product__container">
      {data.map((item) => (
        item.category === product && item.new === true ?<ProductItem product={item} key={item.id} />: ""
       
      ))}
      {data.map((item) => (
        item.category === product && item.new === false ?<ProductItem product={item} key={item.id} />: ""
       
      ))}
    </div>
  );
}

export async function loader() {
  const data = await getData();
  return data;
}

export default ProductContent;
