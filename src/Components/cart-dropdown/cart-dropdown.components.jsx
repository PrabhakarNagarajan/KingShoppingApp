import Button from "../Button/Button.components";
import CartItem from "../cart-item/cart-item.components";
import { useContext } from "react";
import { CartContext } from "../../Context/cart.context";
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.style.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutNavi = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} />
        ))}
        <Button onClick={checkoutNavi}>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
