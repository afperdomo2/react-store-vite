import { createContext, useEffect, useState } from 'react';

export const ShoppingCartContext = createContext();

/**
 * Proveedor del carrito de compras.
 * @param {Object} props - Propiedades del componente.
 * @param {ReactNode} props.children - Componentes hijos.
 * @returns {JSX.Element} El componente proveedor del carrito de compras.
 */
export const ShoppingCartProvider = ({ children }) => {
  // Get Products from API
  const [productsFetch, setProductsFetch] = useState([]);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        setProductsFetch(data);
        setFiltedProducts(data);
        setProducts(data);
      });
  }, []);

  // Products
  const [filteredProducts, setFiltedProducts] = useState([]);
  const filterByCategory = (category) => {
    if (category === 'all') {
      setFiltedProducts(productsFetch);
      setProducts(productsFetch);
      return;
    }
    const filtered = productsFetch.filter(
      (product) =>
        product.category.name.toLowerCase() === category.toLowerCase()
    );
    setFiltedProducts(filtered);
    setProducts(filtered);
  };

  const [products, setProducts] = useState([]);

  // Search products by title
  const searchProducts = (search) => {
    setSearch(search);
    const filtered = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filtered);
  };

  // Searchs
  const [search, setSearch] = useState('');

  // Shopping Cart
  const [cartProducts, setCartProducts] = useState([]);
  const [isMenuCartOpen, setIsMenuCartOpen] = useState(false);

  const openMenuCart = () => setIsMenuCartOpen(true);
  const closeMenuCart = () => setIsMenuCartOpen(false);
  const toggleMenuCart = () => setIsMenuCartOpen(!isMenuCartOpen);

  // Product Details
  const [showingDetails, setShowingDetails] = useState(false);
  const [productToShow, setProductToShow] = useState([]);

  const showProductDetails = (data) => {
    setShowingDetails(true);
    setProductToShow(data);
  };
  const hideProductDetails = () => {
    setShowingDetails(false);
    setProductToShow({});
  };

  // Order
  const [order, setOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
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
        order,
        setOrder,
        products,
        productsFetch,
        setProductsFetch,
        search,
        searchProducts,
        filterByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
