import React from 'react';
import Item from '../Item/Item';
import { Row, Col, Container } from 'react-bootstrap';
import './ItemList.css';

const ItemList = ({ products }) => {
    return (
        <div>
            <h1 className="productsHeading text-center mt-2 mb-5">Productos</h1>
            <Container>
                <Row xs={1} md={3} className="g-3">
                    {products.map(p => (
                        <Col key={p.id} className="d-flex justify-content-center">
                            <Item
                                name={p.name}
                                description={p.description}
                                id={p.id}
                                image={p.image}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default React.memo(ItemList);
