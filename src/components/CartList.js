import { Button, Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { contexto } from "./CartProvider";
import DeleteIcon from '@mui/icons-material/Delete';

const CartList = () => {

    const {cart, cleanCart, totalProducts, deleteProduct, totalPrice} = useContext(contexto)
    const handleClick = producto => () => deleteProduct(producto)

    return (
        <div className="row row-cols-1 row-cols-md-2 g-5" id="cart-ex-container">
            <Container id="cart-in-container">
            <Row >
                <Col></Col>
                <Col>Dispositivo</Col>
                <Col>Cantidad</Col>
                <Col>Precio</Col>
                <Col>Eliminar</Col>
            </Row>
            {cart.map((producto) =>{
                return(
                    <Row key={producto.id} className='cartAlign bgCard'>
                        <Col><img src={producto.imagen} className='imgCart' alt='' width="80px"/></Col>
                        <Col>{producto.tipo}</Col>
                        <Col>{producto.stock}</Col> 
                        <Col>${producto.precio} c/u</Col>
                        <Col><Button onClick={handleClick(producto)}variant='success'>{<DeleteIcon/>}</Button></Col>                        </Row>
                    )})}
            <Row className='cartAlign'>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col>Total: ${totalPrice}</Col>
                <Col className='btnCart'>
                    <Button as={Link} to='/checkuot' variant='primary' id="btn-compra">Comprar</Button>
                    <Button onClick={cleanCart} variant='danger' id="btn-compra">Vaciar</Button>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default CartList