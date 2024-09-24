import React from 'react';

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{product.title}</h2>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Popularity:</strong> {product.popularity}</p>
        <p>{product.description || 'No description available'}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
