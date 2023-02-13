import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { contexto } from "./CartProvider";
import CartList from './CartList'
import ItemListContainer from './ItemListContainer';
import { useNavigate } from 'react-router-dom';

const CartContainer = () => {

  const { totalProducts } = useContext(contexto)
  const [cartEmpty, setCartEmpty] = useState()
  const navigate = useNavigate()
  
  
  
  useEffect(() => {
    
    if(totalProducts === 0 ){
      setCartEmpty(true)
      toast.error("El carrito está vacio!")
      navigate('/')
    }else{setCartEmpty(false)}
   
  },[])
  
  return (

    <>
      {cartEmpty ? <ItemListContainer/> : <CartList />}
    </>

  )
}

export default CartContainer