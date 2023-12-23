import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Card } from 'react-bootstrap';

const ItemDetail = ({ product }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <div className="d-flex justify-content-center">
                    <ItemCount />
                </div>
            </Card.Body>
        </Card>

    )
}

export default ItemDetail