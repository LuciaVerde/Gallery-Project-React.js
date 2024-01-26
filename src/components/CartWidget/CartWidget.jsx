import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  
  // Obtener el estado del carrito desde el contexto
  const { cart } = useContext(CartContext);

  // Calcular la cantidad total de ítems en el carrito 
  const itemQuantity = cart.reduce((total, product) => total + product.quantity, 0); 

  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} /> {itemQuantity}
    </div>
  );
};

export default CartWidget;

