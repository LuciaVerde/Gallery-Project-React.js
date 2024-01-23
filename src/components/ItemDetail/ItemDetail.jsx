import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ product }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const {addItem} = useContext (CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id: product.id,
            name: product.name,
            price: product.price
        };

        addItem(item, quantity)

    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <div className="d-flex justify-content-center">
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart'> Terminar compra </Link>) :
                            (<ItemCount initial={0} onAdd={handleOnAdd} />
                            )
                    }
                </div>
            </Card.Body>
        </Card>

    )
}

export default ItemDetail