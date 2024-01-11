import { useContext } from 'react';
import { Link } from 'react-router-dom';

import OrderCard from '../../components/OrderCard';
import { ShoppingCartContext } from '../../context';

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <div className="w-96">
      <div>MyOrders</div>
      {context.order.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${order.id}`}>
            <OrderCard
              date={order.date}
              totalAmount={order.totalAmount}
              totalPrice={order.totalPrice}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default MyOrders;
