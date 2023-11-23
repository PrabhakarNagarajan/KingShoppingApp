import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../../store/categories/categories.selector";

import CategoryPreview from "../../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesSelector);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        console.log(products);

        return (
          <CategoryPreview key={title.id} title={title} product={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
