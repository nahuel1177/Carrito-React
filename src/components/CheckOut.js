import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UsersList from "./UsersList"; 


const CheckOut = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [usuarios, setUsuarios] = useState([])

    const handleClick = (e) => {
        let copia = [...usuarios]
        const usuario = {
            nombre: nombre,
            email: email
        }
        copia.push(usuario)
        setUsuarios(copia)
    }

    const handleChangeName = (e) => {
        setNombre(e.target.value)
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
                <Form.Group className="mb-4" controlId="email">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" onChange={handleChangeEmail} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="button">
                    <div id="button"><Button onClick={handleClick}>Finalizar Compra</Button></div>
                </Form.Group>
                <UsersList usuarios={usuarios}/>
            </Form>
        </div>
    )
}

export default CheckOut