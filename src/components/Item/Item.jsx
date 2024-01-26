import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Item.css';


const Item = ({ name, id, image }) => {

    return (
        <Card className="card" style={{borderColor:'black', borderRadius:0 }}>
                <Card.Img className="image" variant="top" src={image}/>
                <Card.Body className="cardBody">
                    <Card.Title  className="text-center">{name}</Card.Title>
                    <Link to={`/product/${id}`}><Button variant="dark">Ver detalle</Button></Link>
                </Card.Body>
        </Card>
    )
}

export default Item