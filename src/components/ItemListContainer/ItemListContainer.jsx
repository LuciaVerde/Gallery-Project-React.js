import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();


  useEffect(() => {

    const db = getFirestore()

    const productsCollection = collection(db, "paintings")

    getDocs(productsCollection)
    .then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProducts(docs)
      setLoading(false)
    })

      .catch((error) => {
        console.error("No se encontraron productos", error);
        setLoading(false);
      });

  }, [])

  const getProductsByCategory = products.filter((product) => product.category === categoryId);

  if (loading) {
    return <LoaderComponent />;
  }

  return (
    <div>
      {categoryId ? <ItemList products={getProductsByCategory} /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
