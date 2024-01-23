import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({ name, id, image }) => {

    return (
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={image} />
            <Card.Body >
                <Card.Title>{name}</Card.Title>
                <Link to={`/product/${id}`}><Button variant="primary">Ver detalle</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default Item