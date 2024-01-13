import {
  CalendarIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

const OrderCard = ({ date, totalAmount, totalPrice }) => {
  return (
    <div className="flex justify-between p-3 mb-3 border hover:bg-gray-50">
      <div className="flex">
        <CalendarIcon className="w-5 h-6 text-red-500" />
        <span className="ml-1">{date}</span>
      </div>

      <div className="flex">
        <ShoppingCartIcon className="w-5 h-6 text-cyan-500" />
        <span className="ml-1">{totalAmount} Products</span>
      </div>

      <div className="flex">
        <CurrencyDollarIcon className="w-5 h-6 text-green-500" />
        <span className="ml-1">
          {totalPrice} <small className="text-gray-500">USD</small>
        </span>
      </div>
    </div>
  );
};

export default OrderCard;
