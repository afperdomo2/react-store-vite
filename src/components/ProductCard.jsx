import { CheckIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';

import { ShoppingCartContext } from '../context';
import '../css/ProductCard.css';

const ProductCard = ({ data }) => {
  const context = useContext(ShoppingCartContext);

  const showProductDetails = (data) => {
    context.closeMenuCart();
    context.showProductDetails(data);
  };

  const addProductToCart = (event, data) => {
    event.stopPropagation();
    context.setCartProducts([...context.cartProducts, data]);
    context.hideProductDetails();
    context.openMenuCart();
  };

  const renderIcon = (productId) => {
    const isProductInCart = context.cartProducts.some(
      ({ id }) => id === productId
    );
    return isProductInCart ? (
      <div className="bg-green-500 btn-add-to-cart">
        <CheckIcon className="w-6 h-6 text-white" />
      </div>
    ) : (
      <div
        onClick={(event) => addProductToCart(event, data)}
        className="bg-white btn-add-to-cart"
      >
        <PlusIcon className="w-6 h-6 text-gray-500" />
      </div>
    );
  };

  return (
    <div
      onClick={() => showProductDetails(data)}
      className="w-full rounded-lg cursor-pointer bg-gray-50 h-60"
    >
      <figure className="relative w-full mb-2 h-4/5">
        <span className="absolute bottom-0 left-0 px-2 py-0.5 m-2 text-xs text-black rounded-md bg-white/60">
          {data.category.name}
        </span>
        <img
          className="object-cover w-full h-full rounded-t-lg"
          src={data?.images[0]}
          alt={data.title}
        />
        {renderIcon(data.id)}
      </figure>

      <p className="flex justify-between px-2">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
};

export default ProductCard;
