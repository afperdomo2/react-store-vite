import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

/**
 * Proveedor del carrito de compras.
 * @param {Object} props - Propiedades del componente.
 * @param {ReactNode} props.children - Componentes hijos.
 * @returns {JSX.Element} El componente proveedor del carrito de compras.
 */
export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCartContext.Provider value={{ count, setCount }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
