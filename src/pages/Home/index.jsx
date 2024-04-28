import { useContext } from 'react';
import ProductCard from '../../components/ProductCard';
import ProductDetail from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../context';

const Home = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <div className="w-7/12">
      <div className="mb-3 text-center text-gray-700">
        <h1 className="text-2xl font-medium">Exclusive Products</h1>
      </div>

      <div className="flex w-full mb-4">
        <input
          type="search"
          className="w-1/3 p-3 border border-black rounded-md focus:outline-none"
          onChange={(e) => context.searchProducts(e.target.value)}
          placeholder="Search a product..."
        />

        <div className="flex flex-col justify-end w-2/3 mb-1 font-semibold text-right text-gray-600">
          <span className="text-sm">
            {context.products.length} productos encontrados
          </span>
        </div>
      </div>

      <div className="grid w-full max-w-screen-lg grid-cols-4 gap-4 text-left">
        {context.products.length > 0 ? (
          context.products.map((product) => {
            return <ProductCard key={product.id} data={product} />;
          })
        ) : (
          <span className="text-gray-500">No products found</span>
        )}
      </div>

      <ProductDetail />
    </div>
  );
};

export default Home;
