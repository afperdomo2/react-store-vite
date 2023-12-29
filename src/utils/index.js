/**
 * Calcula el precio total de los productos.
 * @param {Array} products - Los productos a calcular.
 * @returns {number} - El precio total de los productos.
 */
export const totalPrice = (products) => {
  return products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
};
