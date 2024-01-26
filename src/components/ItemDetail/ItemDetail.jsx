import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './ItemDetail.css';


const ItemDetail = ({ product }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        };

        addItem(item, quantity)

    }

    return (
        <div className="container cardContainer">
            <div>
                <h1 className="detailHeading">Detalles del producto</h1>
            </div>
            <Card style={{ width: '18rem', borderColor: 'black', borderRadius: 0 }}>
                <Card.Img className="image" variant="top" src={product.image} />
                <Card.Body className="cardBody">
                        <Card.Title className="pb-2" >{product.name}</Card.Title>
                        <Card.Text >Precio: ${product.price}</Card.Text>
                    <Card.Text >{product.description}</Card.Text>
                        {
                            quantityAdded > 0 ? (
                                <Link to='/cart'> <Button variant="dark"> Terminar compra </Button> </Link>) :
                                (<ItemCount initial={0} onAdd={handleOnAdd} />
                                )
                        }
                </Card.Body>
            </Card>
        </div>

    )
}

export default ItemDetail