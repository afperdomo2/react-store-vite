import { useContext } from 'react';
import { Link } from 'react-router-dom';

import OrderCard from '../../components/OrderCard';
import { ShoppingCartContext } from '../../context';

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <div className="text-center xl:w-6/12 lg:w-8/12">
      <div className="mb-4 text-center text-gray-700">My Orders</div>

      {context.order.length > 0 ? (
        context.order.map((order, index) => {
          return (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrderCard
                date={order.date}
                totalAmount={order.totalAmount}
                totalPrice={order.totalPrice}
              />
            </Link>
          );
        })
      ) : (
        <div className="text-gray-500">You have no orders</div>
      )}
    </div>
  );
}

export default MyOrders;
