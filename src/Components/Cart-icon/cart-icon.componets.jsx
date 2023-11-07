import { UserContext } from "../../Context/user.context";
import "./cart-icon.styles.scss";
import { ReactComponent as CartLogo } from "../assets/image/shoppingbag.svg";

import { CartContext } from "../../Context/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const ToogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <CartLogo className="shopping-icon" onClick={ToogleIsCartOpen} />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
