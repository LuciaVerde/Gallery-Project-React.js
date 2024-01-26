import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = () => {
  
  // Extraer valores del contexto del carrito
  const { cart, setCart, clearCart, removeItem } = useContext(CartContext)

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

  //Subtotal por producto
  const subtotalByProduct = (product) => {
    return product.price * product.quantity;
  };

  // Total del carrito
  const total = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  }

  return (
    <div className="container">
      <h1 className="cartHeading text-center my-5">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="emptyCart text-center mb-5">El carrito está vacío 🤷🏻‍♀️</p>
          <Link to={'/'}>
            <Button variant="dark">Ver productos</Button>
          </Link>
        </div>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="row productContainer mb-4">
              <div className="col">
                <Image className="cartImage" src={product.image} />
              </div>

              <div className="col section">
                <small>Nombre</small>
                <h4>{product.name}</h4>
              </div>

              <div className="col section">
                <small>Cantidad</small>
                <div className="quantityButtons">
                  <Button variant="dark" className="btn-sm" onClick={() => decreaseQuantity(product.id)}>
                    -
                  </Button>
                  <h4 className="px-5">{product.quantity}</h4>
                  <Button variant="dark" className="btn-sm" onClick={() => increaseQuantity(product.id)}>
                    +
                  </Button>
                </div>
              </div>

              <div className="col section">
                <small>Precio</small>
                <h4>${product.price}</h4>
              </div>

              <div className="col section">
                <small>Subtotal</small>
                <h4>${subtotalByProduct(product)}</h4>
              </div>

              <div className="col section pt-2">
                <FontAwesomeIcon icon={faTrash} onClick={() => removeItem(product.id)} className="fa-xl" />
              </div>
            </div>
          ))}

          <div className="row actions mt-4">
            <div className="col-4">
              <Button variant="dark" onClick={clearCart}>
                VACIAR CARRITO
              </Button>
            </div>

            <div className="col-4 d-flex justify-content-end">
              <button className="totalButton">Total: ${total()}</button>
              <Link to={'/formulario'}>
                <button className="orderButton">ORDENAR AHORA</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart