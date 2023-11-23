import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../../Utils/firebase/firebase.utils";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Categories-preview/categories-preview.components";
import Category from "../Category/category.component";
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "../../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesmap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      console.log(categoryMap);
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesmap();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
