import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://cdn.drcode.ai/interview-materials/products.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};
