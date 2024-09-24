import React from 'react';
import { ProductProvider } from './ProductContext';
import App from './App';

const Root = () => {
  return (
    <ProductProvider>
      <App />
    </ProductProvider>
  );
};

export default Root;