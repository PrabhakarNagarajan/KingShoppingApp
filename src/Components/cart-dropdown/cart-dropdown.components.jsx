import Button from "../Button/Button.components";
import CartItem from "../cart-item/cart-item.components";

import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./cart-dropdown.style.scss";
import { useSelector } from "react-redux";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
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
