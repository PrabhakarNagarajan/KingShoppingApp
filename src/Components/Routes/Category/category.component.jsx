import { useState, useEffect, Fragment } from "react";

import { useParams } from "react-router-dom";
import ProductCard from "../../ProductCard/product-card.components";
import "./category.style.scss";
import { useSelector } from "react-redux";
import {
  categoriesSelector,
  selectCategoriesIsLoading,
} from "../../../store/categories/categories.selector";

import Spinner from "../../Spinner/spinner.components";

const Category = () => {
  const { category } = useParams();
  console.log("render/re-rendering category component");
  const categories = useSelector(categoriesSelector);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    console.log("effect fired calling setProducts");
    setProducts(categories[category]);
  }, [category, categories]);

  //return statement

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
