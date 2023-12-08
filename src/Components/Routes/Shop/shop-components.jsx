import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../../Utils/firebase/firebase.utils";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Categories-preview/categories-preview.components";
import Category from "../Category/category.component";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../store/categories/categories.action";
import { fetchCategoriesAsync } from "../../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
