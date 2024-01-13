import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import OrderCard from '../../components/OrderProductCard';
import { ShoppingCartContext } from '../../context';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const { id } = useParams();

  const selectedOrder =
    id === 'last' ? context.order?.slice(-1)[0] : context.order[id];

  return (
    <div className="xl:w-6/12 lg:w-8/12">
      <div className="flex justify-between mb-4 text-center text-gray-700">
        <Link to="/my-orders">
          <ChevronLeftIcon className="w-5 mt-1 rounded-sm hover:bg-gray-50" />
        </Link>

        <span>My Order</span>

        <span />
      </div>

      <div className="flex flex-col ">
        {selectedOrder?.products.map((product) => (
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
            $ {selectedOrder?.totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
