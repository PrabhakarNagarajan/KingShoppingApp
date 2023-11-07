import Button from "../Button/Button.components";
import "./product-card.style.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addproductToCart = () => {
    console.log("clicked");
    addItemToCart(product);
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
