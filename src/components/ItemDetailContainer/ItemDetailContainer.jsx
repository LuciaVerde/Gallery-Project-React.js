import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore()

    const oneProduct = doc(db, "paintings", `${id}`);
    getDoc(oneProduct).then((snapshot) => {
      if (snapshot.exists()) {
        const doc = snapshot.data()
        setProduct(doc)
        setLoading(false)
      }
    })
  }, [])

  if (loading) {
    return <LoaderComponent />
  }

  return (
    <div>
      {product && <ItemDetail product={product} />}
    </div>
  );
}

export default ItemDetailContainer;