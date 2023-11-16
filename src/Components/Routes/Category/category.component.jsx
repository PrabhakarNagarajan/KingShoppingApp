import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../../Context/category.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../ProductCard/product-card.components";
import "./category.style.scss";

const Category = () => {
  const { category } = useParams;

  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
