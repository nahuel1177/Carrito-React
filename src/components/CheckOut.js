import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import { useContext } from 'react';
import { contexto } from './CartProvider';

const CheckOut = () => {

    const { setUser } = useContext(contexto)
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleClick = (e) => {
        const usuario = {
            name: name,
            surname: surname,
            email: email
        }
        setUser(usuario)
        navigate('/venta')
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