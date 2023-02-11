import { createContext, useContext, useState } from 'react';

export const contexto = createContext()
const Provider = contexto.Provider

export const useCart = () => {
  const valorDelContexto = useContext(contexto)
  return valorDelContexto
}

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)

  const addProduct = (product, contador) => {
    if (inCart(product)) {
      console.log("Producto en carrito")
      //modAmount(product, contador)
    } else {
      //localstorage
      console.log("Producto nuevo")
      console.log(cart)
      const copia = Array.from(cart)
      console.log(copia)
      copia.push(modAmount(product, contador))
      console.log(copia)
      setCart(copia)
      console.log(cart)
    }
  }

  const removeProduct = (id) => {
    const filteredCart = cart.filter((product) => product.id !== id)
    setCart(filteredCart)
    console.log(cart)
  }

  const cleanCart = () => {
    setCart([])
  }

  const inCart = (addedProduct) => {
    if (cart.find((product) => [product.id] === addedProduct.id)) {
      console.log("producto encontrado")
      return true
    }
  }

  const modAmount = (product, contador) => {
    //const copia = [...cart]
    product.stock = contador
    //setCart(copia)
    console.log("Cantidad modificada: " + product.stock)
    return product
  }

  const valorDelContexto = {
    cart: cart,
    totalProducts: totalProducts,
    setCart: setCart,
    setTotalProducts: setTotalProducts,
    addProduct: addProduct,
    removeProduct: removeProduct,
    cleanCart: cleanCart,
    inCart: inCart,
    modAmount: modAmount
  }

  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}

export default CartProvider