import Button from "../Button/Button.components";
import CartItem from "../cart-item/cart-item.components";
import { useContext } from "react";
import { CartContext } from "../../Context/cart.context";

import "./cart-dropdown.style.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-drop-container">
      <div className="cart-items" />
      {cartItems.map((item) => (
        <CartItem cartItem={item} />
      ))}
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
