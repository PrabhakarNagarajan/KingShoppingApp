import { useState, createContext } from "react";
import Products from "../shop-data.json";

export const ProductsContext = createContext({
  product: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
