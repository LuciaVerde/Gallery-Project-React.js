import React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  //agregar producto al carrito y chequear si ya está agregado
  const addItem = (product, quantity) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      const cartUpdated = [...cart];
      cartUpdated[productIndex].quantity += quantity;
      setCart(cartUpdated);
    } else {
      setCart((prev) => [...prev, { ...product, quantity }]);
    }
  };

  // borrar producto en carrito
  const removeItem = (id) => {
    const cartUpdated = cart.filter(product => product.id !== id)
    setCart(cartUpdated)
  }

  // limpiar el carrito
  const clearCart = () => {
    setCart([])
  }


  return (
    <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
