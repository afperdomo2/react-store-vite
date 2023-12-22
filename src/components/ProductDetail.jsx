import { useContext } from 'react';
import { ShoppingCartContext } from '../context';

import { XMarkIcon } from '@heroicons/react/24/outline';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.showingDetails ? 'flex' : 'hidden'
      } w-[300px] h-[calc(100vh-68px)] flex-col fixed bg-white right-0 top-[68px] border-l border-gray-100 shadow-2xl`}
    >
      <div className="flex items-center justify-between p-6">
        <h2 className="text-xl font-medium">Details</h2>
        <button onClick={() => context.hideProductDetails()}>
          <XMarkIcon className="w-6 h-6 text-gray-500" />
        </button>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.images}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col px-6 pt-4">
        <span className="mb-2 text-2xl font-medium">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-md">
          {context.productToShow.title}
        </span>
        <span className="text-sm font-light">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
