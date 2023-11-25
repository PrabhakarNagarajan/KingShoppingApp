import { useState, useEffect, Fragment } from "react";

import { useParams } from "react-router-dom";
import ProductCard from "../../ProductCard/product-card.components";
import "./category.style.scss";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../../store/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  console.log("render/re-rendering category component");
  const categories = useSelector(categoriesSelector);

  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    console.log("effect fired calling setProducts");
    setProducts(categories[category]);
  }, [category, categories]);

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
