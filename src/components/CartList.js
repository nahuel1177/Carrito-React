import { Button, Container, Col, Row } from 'react-bootstrap'
import { useContext } from 'react';
import { contexto } from "./CartProvider";
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useNavigate } from 'react-router-dom';

const CartList = () => {

    const { cart, cleanCart, totalProducts, deleteProduct, totalPrice } = useContext(contexto)
    const navigate = useNavigate()

    const handleClick = producto => () => {
        deleteProduct(producto)
    }
    
    const handleComprar = () => {
        navigate('/checkuot')
    }
    const handleVaciar = () =>{
        cleanCart()
        navigate('/')
    }

    return (
        <div className="row row-cols-1 row-cols-md-2 g-5" id="cart-ex-container">
            <Container id="cart-in-container">
                <Row >
                    <Col></Col>
                    <Col>Dispositivo</Col>
                    <Col>Cantidad</Col>
                    <Col>Precio (unidad)</Col>
                    <Col>Eliminar</Col>
                </Row>
                {cart.map((producto) => {
                    return (
                        <Row key={producto.id} className='cartAlign bgCard'>
                            <Col><img src={producto.image} className='imgCart' alt='' width="80px" /></Col>
                            <Col>{producto.type}</Col>
                            <Col>{producto.stock}</Col>
                            <Col>${producto.price}</Col>
                            <Col><Button onClick={handleClick(producto)} variant='secondary'>{<DeleteIcon />}</Button></Col>
                        </Row>
                    )
                })}
                <Row className='cartAlign'>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col><div className="btn-cart">
                        <Button onClick={handleVaciar} variant='danger'><span><RemoveShoppingCartIcon/></span></Button>
                    </div></Col>
                </Row>
                <div className="btn-container">
                    <div className="btn-cart">
                        <Button onClick={handleComprar} variant='primary'>Comprar <ShoppingCartCheckoutIcon/></Button>
                    </div>
                    <div>Total: ${totalPrice}</div>
                    
                </div>

            </Container>
        </div >
    )
}

export default CartList