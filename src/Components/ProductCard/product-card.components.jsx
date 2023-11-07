import Button from "../Button/Button.components";
import "./product-card.style.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttontype="inverted">Add to card</Button>
    </div>
  );
};

export default ProductCard;
