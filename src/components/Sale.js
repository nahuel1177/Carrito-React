import { Button, Container, Col, Row } from 'react-bootstrap'
import { memo } from "react";
import { useContext } from 'react';
import { contexto } from "./CartProvider";
import { useNavigate } from 'react-router-dom';

const Sale = () => {

  const { user, cart, totalPrice, cleanCart } = useContext(contexto)
  const navigate = useNavigate()

  const handleClick = () => {
    cleanCart()
    navigate('/')
  }

  return (

    <div className="row row-cols-1 row-cols-md-2 g-5" id="cart-ex-container">

      <Container id="cart-in-container">
        <Row>{user.name} {user.surname} - {user.email}</Row>
        <Row>
          <Col></Col>
          <Col>Dispositivo</Col>
          <Col>Cantidad</Col>
          <Col>Precio</Col>
          <Col></Col>
        </Row>
        {cart.map((producto) => {
          return (
            <Row key={producto.id} className='cartAlign bgCard'>
              <Col></Col>
              <Col>{producto.tipo}</Col>
              <Col>{producto.stock}</Col>
              <Col>${producto.precio} c/u</Col>
              <Col></Col>
            </Row>
          )
        })}
        <Row className='cartAlign bgCard'>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>Total: ${totalPrice}</Col>
          <Col></Col>
        </Row>
        <Button onClick={handleClick} variant='primary' id="btn-compra">Volver</Button>
      </Container>
    </div>


  )
}

export default memo(Sale)