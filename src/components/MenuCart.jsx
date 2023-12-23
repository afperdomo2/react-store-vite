import { useContext } from 'react';
import { ShoppingCartContext } from '../context';

import { XMarkIcon } from '@heroicons/react/24/outline';

const MenuCart = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isMenuCartOpen ? 'flex' : 'hidden'
      } w-[300px] h-[calc(100vh-68px)] flex-col fixed bg-white right-0 top-[68px] border-l border-gray-100 shadow-2xl`}
    >
      <div className="flex items-center justify-between p-6">
        <h2 className="text-xl font-medium">My Order</h2>
        <button onClick={() => context.closeMenuCart()}>
          <XMarkIcon className="w-6 h-6 text-gray-500" />
        </button>
      </div>
    </aside>
  );
};

export default MenuCart;
