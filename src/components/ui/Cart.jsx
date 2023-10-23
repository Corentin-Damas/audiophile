import { useState } from "react";
import CartIcon from "./CartIcon";
import CartItem from "./CartItem";


function Cart() {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);
  return (
    <div className="cart">
      <CartIcon setIsOpen={setIsOpen} isOpen={isOpen} />
      { !isOpen && <CartItem />}
    </div>
  );
}




export default Cart;
