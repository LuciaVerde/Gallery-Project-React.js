import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const itemQuantity = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} /> {itemQuantity}
    </div>
  );
};

export default CartWidget;

