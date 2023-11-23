import { useState, useEffect, Fragment } from "react";

import { useParams } from "react-router-dom";
import ProductCard from "../../ProductCard/product-card.components";
import "./category.style.scss";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../../store/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categoriesSelector);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
