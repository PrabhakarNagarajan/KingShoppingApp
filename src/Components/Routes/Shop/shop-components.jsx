import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Categories-preview/categories-preview.components";
import Category from "../Category/category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
