import React, { useContext } from "react";

// import SHOP_DATA from "../../../shop-data.json";
import { ProductsContext } from "../../../Context/product.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map(({ name, id }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;