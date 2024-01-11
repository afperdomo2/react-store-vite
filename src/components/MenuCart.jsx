import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { ShoppingCartContext } from '../context';
import OrderCard from './OrderProductCard';
import { totalPrice } from '../utils';

const MenuCart = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const newCartProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(newCartProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: Date.now(),
      products: context.cartProducts,
      totalAmount: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.closeMenuCart();
  };

  return (
    <aside
      className={`${
        context.isMenuCartOpen ? 'flex' : 'hidden'
      } w-[350px] h-[calc(100vh-68px)] flex-col fixed bg-white right-0 top-[68px] border-l border-gray-100 shadow-2xl`}
    >
      <div className="flex items-center justify-between p-6 mb-5 border-b-2 border-gray-200">
        <h2 className="text-xl font-medium">My Order</h2>
        <button onClick={() => context.closeMenuCart()}>
          <XMarkIcon className="w-6 h-6 text-gray-500" />
        </button>
      </div>

      {context.cartProducts.length > 0 ? (
        <>
          <div className="flex-1 px-6 overflow-y-auto">
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

          <div className="px-6 my-3 border-t-2 bg-gray-50">
            <div className="flex items-center justify-between py-4">
              <p className="text-lg font-medium">Total</p>
              <p className="text-xl font-medium text-green-600">
                $ {totalPrice(context.cartProducts)}
              </p>
            </div>

            <Link to="/my-orders/last">
              <button
                onClick={() => handleCheckout()}
                className="w-full py-2 font-medium text-white bg-green-600 rounded-lg"
              >
                Checkout
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className="flex items-start flex-1 px-6 pt-5 justify-left">
          <p className="text-lg font-medium">No products in the cart</p>
        </div>
      )}
    </aside>
  );
};

export default MenuCart;
