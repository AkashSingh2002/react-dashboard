import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductTable from '../components/ProductTable';

const ProductList = () => {
  const { products, loading, error } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState('');
  const [popularityFilter, setPopularityFilter] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    // Filter products based on search term, price range, and popularity range
    const filtered = products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = filterByPrice(product.price);
      const matchesPopularity = filterByPopularity(product.popularity);
      return matchesSearch && matchesPrice && matchesPopularity;
    });
    
    // Sort products
    const sorted = filtered.sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'popularity') {
        return a.popularity - b.popularity;
      }
      return 0;
    });

    setFilteredProducts(sorted);
  }, [searchTerm, priceFilter, popularityFilter, sortBy, products]);

  const filterByPrice = (price) => {
    if (!priceFilter) return true;
    if (priceFilter === '0-5000') return price <= 5000;
    if (priceFilter === '5000-10000') return price > 5000 && price <= 10000;
    if (priceFilter === '10000-20000') return price > 10000 && price <= 20000;
    return price > 20000;
  };

  const filterByPopularity = (popularity) => {
    if (!popularityFilter) return true;
    if (popularityFilter === '0-10000') return popularity <= 10000;
    if (popularityFilter === '10000-30000') return popularity > 10000 && popularity <= 30000;
    if (popularityFilter === '30000-50000') return popularity > 30000 && popularity <= 50000;
    return popularity > 50000;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />
      
      <select onChange={(e) => setPriceFilter(e.target.value)}>
        <option value="">Filter by Price</option>
        <option value="0-5000">0 - 5000</option>
        <option value="5000-10000">5000 - 10000</option>
        <option value="10000-20000">10000 - 20000</option>
        <option value="20000+">20000+</option>
      </select>
      
      <select onChange={(e) => setPopularityFilter(e.target.value)}>
        <option value="">Filter by Popularity</option>
        <option value="0-10000">0 - 10000</option>
        <option value="10000-30000">10000 - 30000</option>
        <option value="30000-50000">30000 - 50000</option>
        <option value="50000+">50000+</option>
      </select>

      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="popularity">Popularity</option>
      </select>

      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default ProductList;
