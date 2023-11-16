import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../../Context/category.context";

import CategoryPreview from "../../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
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
