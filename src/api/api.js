import axios from 'axios';

export async function productsData() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    // Handle the error
    console.error('Error fetching products:', error);
    throw error;
  }
}
