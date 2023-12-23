import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({ name, id }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body >
                <Card.Title>{name}</Card.Title>
                <Link to={`/product/${id}`}><Button variant="primary">Ver detalle</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default Item