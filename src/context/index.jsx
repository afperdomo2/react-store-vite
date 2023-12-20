import { createContext } from 'react';

const ShoppingCartContext = createContext();

/**
 * Proveedor del carrito de compras.
 * @param {Object} props - Propiedades del componente.
 * @param {ReactNode} props.children - Componentes hijos.
 * @returns {JSX.Element} El componente proveedor del carrito de compras.
 */
export const ShoppingCartProvider = ({ children }) => {
  return (
    <ShoppingCartContext.Provider>{children}</ShoppingCartContext.Provider>
  );
};
