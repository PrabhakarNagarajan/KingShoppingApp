import ProductCard from "../ProductCard/product-card.components";
import "./category-preview.style.scss";

const CategoryPreview = ({ title, product }) => {
  console.log(product);
  return (
    <div className="category-preview-container ">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {product
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
