import { render, screen } from '@testing-library/react';
import ProductTable from '../components/ProductTable';
import { ProductContext } from '../context/ProductContext';

const mockProducts = [
  { id: 1, title: 'Product A', price: 1000, popularity: 5000 },
  { id: 2, title: 'Product B', price: 2000, popularity: 7000 },
];

describe('ProductTable', () => {
  test('renders product table correctly', () => {
    render(
      <ProductContext.Provider value={{ products: mockProducts }}>
        <ProductTable />
      </ProductContext.Provider>
    );

    expect(screen.getByText('Product A')).toBeInTheDocument();
    expect(screen.getByText('Product B')).toBeInTheDocument();
  });
});
