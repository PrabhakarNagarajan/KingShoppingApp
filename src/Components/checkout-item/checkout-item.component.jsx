import "./checkout-item.style.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { cartItemToClear, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const clearitemhandler = () => cartItemToClear(cartItem);

  const incrementCartItem = () => addItemToCart(cartItem);
  const decrementCartItem = () => removeItemToCart(cartItem);
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
