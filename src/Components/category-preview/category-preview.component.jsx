import ProductCard from "../ProductCard/product-card.components";
import "./category-preview.style.scss";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, product }) => {
  return (
    <div className="category-preview-container ">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {product
          ?.filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
