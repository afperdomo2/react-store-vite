import { useContext } from 'react';
import ProductCard from '../../components/ProductCard';
import ProductDetail from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../context';

const Home = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <div>
      <div className="mb-3 text-center text-gray-700">
        <h1 className="text-2xl font-medium">Exclusive Products</h1>
      </div>

      <input
        type="text"
        className="p-3 mb-4 border border-black rounded-md w-80 focus:outline-none"
        onChange={(e) => e.target.value}
        placeholder="Search a product..."
      />

      <div className="grid w-full max-w-screen-lg grid-cols-4 gap-4">
        {context.products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
      <ProductDetail />
    </div>
  );
};

export default Home;
