import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = () => {
  const { cart, clearCart, removeItem, increaseQuantity, decreaseQuantity, total } = useContext(CartContext)

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
          <div className="row productContainer">
            {cart.map((product) => (

              <div className="d-flex" key={product.id}>

                <div className='col'>
                  <Image className= "cartImage" src={product.image} />
                </div>

                <div className="col section">
                  <small> Name</small>
                  <h4>{product.name}</h4>
                </div>

                <div className="col section">
                  <small>Cantidad</small>
                  <div className="quantityButtons" >
                    <Button variant="dark"  className="btn-sm" onClick={() => decreaseQuantity(product.id)}>-</Button>
                    <h4 className="px-5">{product.quantity}</h4>
                    <Button variant="dark" className="btn-sm"  onClick={() => increaseQuantity(product.id)}>+</Button>
                  </div>
                </div>

                <div className="col section">
                  <small>Precio</small>
                  <h4>${product.price}</h4>
                </div>

               <div className="col section pt-2">
               <FontAwesomeIcon icon={faTrash} onClick={() => removeItem(product.id)} className="fa-xl" />
               </div>

              </div>
            ))}
          </div>

          <div className="row actions mt-4">
            <div className="col-4">
              <Button variant="dark" onClick={clearCart}>VACIAR CARRITO</Button>
            </div>
            
            <div className="col-4 d-flex justify-content-end">
              <button className="totalButton">Total: ${total()}</button>
              <Link to={"/formulario"}> <button className="orderButton" > ORDENAR AHORA </button></Link>
            </div>
          
          </div>
        
        </div>
      )}
    </div>
  )
}

export default Cart