import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({ initial, onAdd }) => {

  const [quantity, setQuantity] = useState(initial)

  const sumar = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1)
    }
  }

  const restar = () => {
    if (quantity> 0) {
      setQuantity(quantity - 1)
    }
  }


  return (
    <div>
      <div>
        <Button variant="primary" onClick={restar}>-</Button>
        <Button variant="lihgt">{quantity} </Button>
        <Button variant="primary" onClick={sumar}>+</Button>
      </div>
      <div>
        <Button variant="primary" onClick={() => onAdd(quantity)} >Agregar al carrito </Button>
      </div>
    </div>
  )
}

export default ItemCount