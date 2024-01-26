import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './ItemCount.css';

const ItemCount = ({ initial, onAdd }) => {

  const [quantity, setQuantity] = useState(initial)

  // Función para incrementar la cantidad
  const sumar = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1)
    }
  }
  
  // Función para reducir la cantidad
  const restar = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }


  return (
    <div className='count'>
      <div className='buttons'>
        <Button variant="dark" onClick={restar}>-</Button>
        <Button variant="white">{quantity} </Button>
        <Button variant="dark" onClick={sumar}>+</Button>
      </div>
      <Button variant="dark" onClick={() => onAdd(quantity)} >Agregar al carrito </Button>
    </div>
  )
}

export default ItemCount