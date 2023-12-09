import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import './App'

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const Product = <ProductForm addProduct={addProduct} />;
  return (
    <div>
      <h1>Add Product</h1>
      {Product}
      <h2>Products</h2>
      <ul>
        {products.map((product, item) => {
          return (
            <span key={item}>
              {product.name} - ${product.price}
            </span>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
