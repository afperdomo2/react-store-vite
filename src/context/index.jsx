import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

/**
 * Proveedor del carrito de compras.
 * @param {Object} props - Propiedades del componente.
 * @param {ReactNode} props.children - Componentes hijos.
 * @returns {JSX.Element} El componente proveedor del carrito de compras.
 */
export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [isMenuCartOpen, setIsMenuCartOpen] = useState(false);

  const openMenuCart = () => setIsMenuCartOpen(true);
  const closeMenuCart = () => setIsMenuCartOpen(false);
  const toggleMenuCart = () => setIsMenuCartOpen(!isMenuCartOpen);

  // Product Details
  const [showingDetails, setShowingDetails] = useState(false);
  const [productToShow, setProductToShow] = useState({});

  const showProductDetails = (data) => {
    setShowingDetails(true);
    setProductToShow(data);
  };
  const hideProductDetails = () => {
    setShowingDetails(false);
    setProductToShow({});
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        showingDetails,
        showProductDetails,
        hideProductDetails,
        productToShow,
        cartProducts,
        setCartProducts,
        isMenuCartOpen,
        openMenuCart,
        closeMenuCart,
        toggleMenuCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
