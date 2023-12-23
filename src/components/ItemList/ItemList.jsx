import React from 'react';
import Item from '../Item/Item';
import { Row, Col, Container } from 'react-bootstrap';

const ItemList = ({ products }) => {
    return (
        <Container className="my-5">
            <Row xs={1} md={3} className="g-4">
                {products.map(p => (
                    <Col key={p.id}>
                        <div className="d-flex justify-content-center">
                            <Item
                                name={p.name}
                                description={p.description}
                                price={p.price} 
                                id={p.id}
                            />
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ItemList;
