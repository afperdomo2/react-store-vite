import { useContext } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import { ShoppingCartContext } from '../../context';
import OrderCard from '../../components/OrderProductCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  const lastOrder = context.order?.slice(-1)[0] ?? {};

  return (
    <div className="w-96">
      <div className="flex justify-between mb-4 text-center text-gray-700">
        <Link to="/my-orders">
          <ChevronLeftIcon className="w-5 mt-1 rounded-sm hover:bg-gray-50" />
        </Link>

        <span className="border">My Order</span>

        <span />
      </div>

      <div className="flex flex-col ">
        {lastOrder?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
          />
        ))}
      </div>

      <div className="px-1 my-3 border-t-2 ">
        <div className="flex items-center justify-between py-4">
          <p className="text-lg font-medium">Total</p>
          <p className="text-xl font-medium text-green-600">
            $ {lastOrder?.totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
