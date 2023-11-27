import Button from "../Button/Button.components";
import "./product-card.style.scss";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addproductToCart = () => {
    console.log("clicked");
    dispatch(addItemToCart(cartItems, product));
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button type="button" onClick={addproductToCart} buttontype="inverted">
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
