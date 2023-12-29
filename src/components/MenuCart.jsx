import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { ShoppingCartContext } from '../context';
import OrderCard from './OrderCard';
import { totalPrice } from '../utils';

const MenuCart = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const newCartProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(newCartProducts);
  };

  return (
    <aside
      className={`${
        context.isMenuCartOpen ? 'flex' : 'hidden'
      } w-[350px] h-[calc(100vh-68px)] flex-col fixed bg-white right-0 top-[68px] border-l border-gray-100 shadow-2xl`}
    >
      <div className="flex items-center justify-between p-6">
        <h2 className="text-xl font-medium">My Order</h2>
        <button onClick={() => context.closeMenuCart()}>
          <XMarkIcon className="w-6 h-6 text-gray-500" />
        </button>
      </div>

      <div className="px-6 overflow-y-auto">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className="px-6 mt-4 border-t-2 bg-gray-50">
        <div className="flex items-center justify-between py-4">
          <p className="text-lg font-medium">Total</p>
          <p className="text-xl font-medium text-green-600">
            $ {totalPrice(context.cartProducts)}
          </p>
        </div>

        <button className="w-full py-2 font-medium text-white bg-green-600 rounded-lg">
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default MenuCart;
