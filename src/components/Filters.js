import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState('');
  const [popularityRange, setPopularityRange] = useState('');

  const handlePriceFilter = (e) => {
    setPriceRange(e.target.value);
    onFilter(e.target.value, popularityRange);
  };

  const handlePopularityFilter = (e) => {
    setPopularityRange(e.target.value);
    onFilter(priceRange, e.target.value);
  };

  return (
    <div>
      <select onChange={handlePriceFilter}>
        <option value="">Select Price Range</option>
        <option value="0-5000">0-5000</option>
        <option value="5000-10000">5000-10000</option>
        <option value="10000-20000">10000-20000</option>
        <option value="20000+">20000+</option>
      </select>

      <select onChange={handlePopularityFilter}>
        <option value="">Select Popularity Range</option>
        <option value="0-10000">0-10000</option>
        <option value="10000-30000">10000-30000</option>
        <option value="30000-50000">30000-50000</option>
        <option value="50000+">50000+</option>
      </select>
    </div>
  );
};

export default Filters;
