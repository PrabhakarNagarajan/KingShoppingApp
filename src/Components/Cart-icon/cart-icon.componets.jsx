import "./cart-icon.styles.scss";
import { ReactComponent as CartLogo } from "../assets/image/shoppingbag.svg";

import { CartContext } from "../../Context/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const ToogleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={ToogleIsCartOpen}>
      <CartLogo className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;