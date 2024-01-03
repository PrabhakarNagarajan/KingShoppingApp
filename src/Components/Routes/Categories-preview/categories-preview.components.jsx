import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  categoriesSelector,
  selectCategoriesIsLoading,
} from "../../../store/categories/categories.selector";
import Spinner from "../../Spinner/spinner.components";
import CategoryPreview from "../../category-preview/category-preview.component";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesSelector);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];

          return (
            <CategoryPreview key={title.id} title={title} product={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;

// just a placeholder
