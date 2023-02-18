import { Button, Container, Col, Row } from 'react-bootstrap'
import { memo } from "react";
import { useContext } from 'react';
import { contexto } from "./CartProvider";
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';


const Sale = () => {

  const { cleanCart, idSale } = useContext(contexto)
  const navigate = useNavigate()

  const handleClick = () => {
    cleanCart()
    navigate('/')
  }

  const [venta, setVenta] = useState([])
  
  useEffect(() => {

    let filter

    const salesCollection = collection(db, "sales")

    filter = query(salesCollection, where('id', '==', idSale))

    const pedido = getDocs(filter)

    pedido
      .then((respuesta) => {
        const item = respuesta.data()
        console.log(respuesta)
        setVenta(item)
        toast.dismiss()
        toast.success("Productos cargados!")
      })

      .catch((error) => {
        toast.dismiss()
        toast.error("Error al cargar productos!")
      })

  }, [idSale])

  return (

    <div className="row row-cols-1 row-cols-md-2 g-5" id="cart-ex-container">
      
      <Container id="cart-in-container">

        <div id="title-consumer">Fecha: {venta.date}</div>
        <div id="title-consumer">Venta: {venta.id}</div>
        <div id="title-consumer">Comprador: {venta.user.name} {venta.user.surname} - {venta.user.email} </div>
        <Row>
          <Col></Col>
          <Col>Dispositivo</Col>
          <Col>Cantidad</Col>
          <Col>Precio</Col>
          <Col></Col>
        </Row>
        {venta.products.map((product) => {
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
          <Col>Total: ${venta.price}</Col>
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