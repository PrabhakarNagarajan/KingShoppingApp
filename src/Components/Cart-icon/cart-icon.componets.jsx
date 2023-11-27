import "./cart-icon.styles.scss";
import { ReactComponent as CartLogo } from "../assets/image/shoppingbag.svg";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const ToogleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div className="cart-icon-container" onClick={ToogleIsCartOpen}>
      <CartLogo className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
