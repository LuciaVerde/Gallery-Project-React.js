import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import asyncMock from '../../asyncMock';
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      if (asyncMock.length > 0) {
        setTimeout(() => {
          resolve(asyncMock);
        }, 2000);
      } else {
        reject("No se obtuvieron productos");
      }
    });

    getProducts
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getProductsByCategory = products.filter(product => product.category === categoryId)

  return (
    <div>
      {
        categoryId ? <ItemList products={getProductsByCategory} /> : <ItemList products={products} />
      }
    </div>
  );
}

export default ItemListContainer;
