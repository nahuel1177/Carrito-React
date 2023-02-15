import { Button, Container, Col, Row } from 'react-bootstrap'
import { memo } from "react";
import { useContext } from 'react';
import { contexto } from "./CartProvider";
import { useNavigate } from 'react-router-dom';

const Sale = () => {

  const { cleanCart, idSale, sale } = useContext(contexto)
  const navigate = useNavigate()

  console.log(sale)

  const handleClick = () => {
    cleanCart()
    navigate('/')
  }

  return (

    <div className="row row-cols-1 row-cols-md-2 g-5" id="cart-ex-container">

      <Container id="cart-in-container">
        <div id="title-consumer">Comprador: {sale.user.sale} {sale.user.surname} - {sale.user.email} Venta: {idSale}</div>
        <Row>
          <Col></Col>
          <Col>Dispositivo</Col>
          <Col>Cantidad</Col>
          <Col>Precio</Col>
          <Col>Fecha</Col>
        </Row>
        {sale.products.map((product) => {
          return (
            <Row key={product.id} className='cartAlign bgCard'>
              <Col></Col>
              <Col>{product.type}</Col>
              <Col>{product.stock}</Col>
              <Col>${product.price} c/u</Col>
              <Col>{sale.date}</Col>
            </Row>
          )
        })}
        <Row className='cartAlign bgCard'>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>Total: ${sale.totalPrice}</Col>
          <Col></Col>
        </Row>
        <div id="btn-compra">
          <Button onClick={handleClick} variant='primary'>Volver</Button>
        </div>
      </Container>
    </div>


  )
}

export default memo(Sale)