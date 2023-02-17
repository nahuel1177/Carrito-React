import { Button, Container, Col, Row } from 'react-bootstrap'
import { memo } from "react";
import { useContext } from 'react';
import { contexto } from "./CartProvider";
import { useNavigate } from 'react-router-dom';


const Sale = () => {

  const { cleanCart, idSale, sale } = useContext(contexto)
  const navigate = useNavigate()
  const handleClick = () => {
    cleanCart()
    navigate('/')
  }
  console.log(sale.date)
  return (

    <div className="row row-cols-1 row-cols-md-2 g-5" id="cart-ex-container">

      <Container id="cart-in-container">
      
        <div id="title-consumer">Venta: {idSale}</div>
        <div id="title-consumer">Comprador: {sale.user.name} {sale.user.surname} - {sale.user.email} </div>
        <Row>
          <Col></Col>
          <Col>Dispositivo</Col>
          <Col>Cantidad</Col>
          <Col>Precio</Col>
          <Col></Col>
        </Row>
        {sale.products.map((product) => {
          return (
            <Row key={product.id} className='cartAlign bgCard'>
              <Col></Col>
              <Col>{product.type}</Col>
              <Col>{product.amount}</Col>
              <Col>${product.price} c/u</Col>
              <Col></Col>
            </Row>
          )
        })}
        <Row className='cartAlign bgCard'>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>Total: ${sale.price}</Col>
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