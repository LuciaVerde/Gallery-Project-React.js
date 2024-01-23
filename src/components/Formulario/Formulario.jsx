import React from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import { useState} from 'react'
import Swal from 'sweetalert2';
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")
    const { cart } = useContext(CartContext)

    const db = getFirestore()
    const handleSubmit = (e) => {
        e.preventDefault()

        Swal.fire({
            position: "center",
            icon: "success",
            title: `Muchas gracias ${nombre} nos contactaremos a ${email} para finalizar el proceso de compra`,
            showConfirmButton: false,
            timer: 3000
        });

        addDoc(ordersCollection, order).then(({ id }) =>
            setOrderId(id))
    }

    const order = {
        cliente:{ nombre, email},
        items: cart,
    }

    const ordersCollection = collection(db, "orden")

    return (
        <Container>
            <Row className="justify-content-center">
                <Form style={{ maxWidth: '300px' }} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre y apellido</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa nombre y apellido" className="form-control-sm" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa email" className="form-control-sm" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </Form.Group>
                    <Button variant="primary" type="submit" size="sm">
                        Enviar
                    </Button>
                </Form>
                <p>{`El id de tu compra es: ${orderId}`}</p>
            </Row>
        </Container>
    )
}

export default Formulario