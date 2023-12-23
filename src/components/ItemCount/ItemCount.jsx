import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = () => {

  const [contador, setContador] = useState(0)

  const mostrarMensaje = () => {
    alert(`Productos en el carrito: ${contador} unidades`)
  }

  const sumar = () => {
    if (contador < 5) {
      setContador(contador + 1)
    }
  }

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }


  return (
    <div>
      <Button variant="primary" onClick={restar}>-</Button>
      <Button variant="lihgt" onClick={mostrarMensaje}>Cantidad: {contador} </Button>
      <Button variant="primary" onClick={sumar}>+</Button>
    </div>
  )
}

export default ItemCount
