import React from 'react'
import { createContext, useState } from 'react'

export const CartContext =  createContext(null)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  //agregar producto al carrito
  const addItem = (product, quantity) => {
    setCart(prev => [...prev, { ...product, quantity }])
  }

  // borrar producto en carrito
  const removeItem = (id) => {
    const cartUpdated = cart.filter(product => product.id !== id)
    setCart(cartUpdated)
  }

  // limpiar el carrito
  const clearCart = () => {
    setCart([])
  }

  // Incrementar la cantidad de un producto en el carrito
  const increaseQuantity = (id) => {
    const cartUpdated = cart.map((product) =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    );
    setCart(cartUpdated);
  };

  // Decrementar la cantidad de un producto en el carrito
  const decreaseQuantity = (id) => {
    const cartUpdated = cart.map((product) =>
      product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
    );
    setCart(cartUpdated);
  };
  // Total del carrito
  const total = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity, total }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
