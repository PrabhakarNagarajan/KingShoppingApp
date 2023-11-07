import React, { useContext } from "react";
import { ProductsContext } from "../../../Context/product.context";
import ProductCard from "../../ProductCard/product-card.components";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="shop-container">
      {products.map((product) => (
        <ProductCard key={products.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
