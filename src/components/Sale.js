import { db } from "../firebase"
import { collection, getDocs, where, query } from "firebase/firestore";
import { Button, Container, Col, Row } from 'react-bootstrap'
import { memo } from "react";
import { useContext, useEffect } from 'react';
import { contexto } from "./CartProvider";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Sale = () => {

  const { cleanCart, idSale } = useContext(contexto)
  const [sale, setSale] = ([])
  const navigate = useNavigate()

  useEffect(() => {

    let filter

    const salesCollection = collection(db, "sales")

    filter = query(salesCollection, where("id",'==',idSale))
    console.log(filter)
    const pedido = getDocs(filter)

    pedido
      .then((respuesta) => {
        console.log("Aca Estoy")
        const item = respuesta.data()
        setSale(item)
        toast.dismiss()
        toast.success("Venta Exitosa!")
      })

      .catch((error) => {
        toast.dismiss()
        toast.error("Error al Procesar la venta!")
      })

  }, [setSale])

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