import { useLoaderData } from "react-router-dom";
import { getData } from "../../data/apiAudio";
import { useEffect, useState } from "react";
import ItemResume from "./ItemResume";

function CartItem() {
  const data = useLoaderData();
  const storage = { ...localStorage };
  const [cartLenght, setCartLenght] = useState(Object.keys(storage).length);
  const tempObj = {};

  function HandleDeleteAll() {
    localStorage.clear();
    setCartLenght(0);
  }

  return (
    <div className="cart__resume">
      <div className="Cart__header">
        <h5>Cart({cartLenght})</h5>
        <p className="btn-removeAll" onClick={() => HandleDeleteAll()}>
          Remove all
        </p>
      </div>
      <div className="cart__container">
        {Object.entries(storage).map((el) => {
          const [id, number] = el;
          const dataObj = data[id - 1];

          return <ItemResume key={id} id={id} data={dataObj} number={number} />;
        })}
      </div>
      <div className="cart__total">
        {" "}
        {Object.entries(storage).map((el) => {
          const [id, number] = el;
          const dataObj = data[id - 1];
          tempObj[id] = dataObj.price * number;
          return console.log("tempsObj", tempObj);
        })}
        {cartLenght > 0 && (
          <div className="cart-result">
            <p>total</p>
            <h6> {Object.values(tempObj).reduce((t, n) => t + n)}</h6>
          </div>
        )}
        <button className="orange checkout">CheckOut</button>
      </div>
    </div>
  );
}

export async function loader() {
  const data = await getData();
  return data;
}

export default CartItem;

// dictTotal[id] = Number(data.price) * item;

// console.log(dictTotal);
