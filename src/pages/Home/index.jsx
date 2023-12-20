import ProductCard from '../../components/ProductCard';
import { useState, useEffect } from 'react';
import ProductDetail from '../../components/ProductDetail';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      Home
      <div className="grid w-full max-w-screen-lg grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
      <ProductDetail />
    </div>
  );
};

export default Home;
