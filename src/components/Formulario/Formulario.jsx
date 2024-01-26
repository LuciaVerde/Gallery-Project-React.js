import React from 'react';
import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import './Formulario.css';

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")
    const { cart, clearCart, setCart } = useContext(CartContext)

    const db = getFirestore()
    // Envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault()

        // Mostrar un mensaje de éxito al usuario
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Muchas gracias ${nombre} nos contactaremos a ${email} para finalizar el proceso de compra`,
            showConfirmButton: false,
            timer: 3000
        });

        // Agregar la orden a la colección en Firestore y manejo de errores
        addDoc(ordersCollection, order)
            .then(({ id }) => {
                setOrderId(id);
                clearCart();
                setCart([]);
            })
            .catch(error => {
                console.error("Error al agregar la orden:", error);
            });
    };

    const order = {
        cliente: { nombre, email },
        items: cart,
    }

    const ordersCollection = collection(db, "orden")

    return (
        <div className='container'>
            <div className='text-center'>
                <h1 className="formHeading my-5">Formulario de la orden</h1>
                <p className="petition mb-5">Por favor completa este formulario para finalizar la compra</p>
            </div>
            <div className='row'>
                <div className="col-sm-7 col-md-5 col-lg-3 mx-auto">
                    <Form className='form' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label className="formLabel">Nombre y apellido</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa nombre y apellido" required className="form-control-md" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="formLabel">Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa email" required className="form-control-md" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </Form.Group>
                        <Button className="py-2 px-4 float-end" variant="dark" type="submit" size="sm">
                            Enviar
                        </Button>
                    </Form>
                </div>
            </div>
            <div className="row">
                <p className=" id col-sm-7 col-md-5 col-lg-3 mt-4 mx-auto" >{`El id de tu compra es: ${orderId}`}</p>
            </div>
        </div>
    )
}

export default Formulario