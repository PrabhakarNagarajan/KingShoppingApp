import "./checkout-item.style.scss";

import {
  addItemToCart,
  cartItemToClear,
  removeItemToCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;

  const cartItems = useSelector(selectCartItems);
  const clearitemhandler = () => dispatch(cartItemToClear(cartItems, cartItem));

  const incrementCartItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const decrementCartItem = () =>
    dispatch(removeItemToCart(cartItems, cartItem));
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementCartItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementCartItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={clearitemhandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
