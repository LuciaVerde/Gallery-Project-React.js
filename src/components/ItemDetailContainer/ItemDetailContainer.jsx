import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import products from '../../asyncMock';
import { Container, Row, Col } from 'react-bootstrap';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No se obtuvieron productos");
      }
    });

    getProducts
      .then((result) => {
        const getProductById = result.find((product) => product.id === id);
        setProduct(getProductById);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Container className='my-5'>
      <Row className='justify-content-center'>
        <Col xs={12} md={5}>
          <div className="d-flex justify-content-center">
            {product && <ItemDetail product={product} />}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetailContainer;
