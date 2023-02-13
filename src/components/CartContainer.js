import { useContext, useEffect, useState } from 'react';
import { contexto } from "./CartProvider";
import CartList from './CartList'


const CartContainer = () => {

  const { totalProducts } = useContext(contexto)
  const [cartEmpty, setCartEmpty] = useState()

  useEffect(() => {
  
    totalProducts === 0 ? setCartEmpty(true) : setCartEmpty(false)
   
  },[totalProducts])

  return (

    <>
      {cartEmpty ? <div>¡El carrito está vacio!</div> : <CartList />}
    </>

  )
}

export default CartContainer