import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const Parent = () => {
  const products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Phone", price: 40000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  const [count, setCount] = useState(0);

  const totalPrice = useMemo(() => {
    console.log("total price");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  const handleProductSelect = useCallback((product) => {
    console.log("Selected Product", product.name);
  }, []);
  return (
    <div>
      <h2>Total Price: {totalPrice}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Counter: {count}
      </button>
      <ProductList products={products} onSelect={handleProductSelect} />
    </div>
  );
};

export default Parent;
