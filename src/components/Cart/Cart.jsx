import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, removeItem, increaseQuantity, decreaseQuantity, total } = useContext(CartContext)

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <div>
          <p>El carrito está vacío</p>
          <Link to={'/'}>
            <button>Ver productos</button>
          </Link>
        </div>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <p>Precio: ${item.price}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Vaciar Carrito</button>
          <p>Total: ${total()}</p>
          <Link to={"/formulario"}> <button> ordenar pedido</button></Link>
        </div>
      )}
    </div>
  )
}

export default Cart