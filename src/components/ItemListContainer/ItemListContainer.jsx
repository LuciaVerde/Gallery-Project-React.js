import React from 'react';
import ItemList from '../ItemList/ItemList';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();


  useEffect(() => {

    // Acceder a Firestore
    const db = getFirestore()

    // Obtener la colección de productos
    const productsCollection = collection(db, "paintings")

    getDocs(productsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data())
        setProducts(docs)
        setLoading(false)
      })

      // Manejar errores al obtener los productos
      .catch((error) => {
        console.error("No se encontraron productos", error);
        setLoading(false);
      });

  }, [])

  // Filtrar productos por categoría
  const getProductsByCategory = products.filter((product) => product.category === categoryId);

  // Mostrar un componente de carga mientras se obtienen los productos
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
