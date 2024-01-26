import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    // Acceder a Firestore
    const db = getFirestore()

    // Referencia al documento del producto con el 'id' proporcionado
    const oneProduct = doc(db, "paintings", `${id}`);
    getDoc(oneProduct).then((snapshot) => {
      // Verificar si el producto existe en la DB y extraer datos del documento y actualizar el estado
      if (snapshot.exists()) {
        const doc = snapshot.data()
        setProduct(doc)
        setLoading(false)
      }
    })

      // Manejar errores al obtener el producto
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
        setLoading(false);
      });
  }, [id])

  // Mostrar un componente de carga mientras se obtienen los detalles del producto
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