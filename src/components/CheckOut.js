import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useContext } from 'react';
import { contexto } from "./CartProvider";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CheckOut = () => {

    const { setUser, cart } = useContext(contexto)
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleClick = (e) => {

        const sale = {

            Usuario: {

                name: name,
                surname: surname,
                email: email,
            },
            productos: cart,
            date: serverTimestamp()

        }

        const salesCollection = collection(db, "sales")
        const pedido = addDoc(salesCollection, sale)

        pedido

            .then((respuesta) => {
                //const producto = respuesta.id
                //console.log(producto)
                //setProduct(producto)
                //toast.dismiss()
                //toast.success("Producto cargado!")
            })
            .catch((error) => {
                //toast.dismiss()
                //toast.error("Error al cargar producto!")
            })
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeSurname = (e) => {
        setSurname(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div className="row row-cols-1 row-cols-md-5 g-5" id="checkout-container">
            <Form id="form">
                <Form.Group className="mb-4" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" onChange={handleChangeName} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="surname">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" onChange={handleChangeSurname} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="email">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" onChange={handleChangeEmail} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="button">
                    <div id="button"><Button onClick={handleClick}>Finalizar Compra</Button></div>
                </Form.Group>

            </Form>
        </div>
    )
}

export default CheckOut