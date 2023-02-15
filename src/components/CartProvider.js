import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify'

export const contexto = createContext()
const Provider = contexto.Provider

export const useCart = () => {
  const valorDelContexto = useContext(contexto)
  return valorDelContexto
}

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [user, setUser] = useState({})
  const [totalProducts, setTotalProducts] = useState(0)
  const [idSale, setIdSale] = useState("")

  const addProduct = (producto, contador) => {

    if (!inCart(producto)) {

      const copia = [...cart]
      producto.amount = contador
      copia.push(producto)
      setTotalProducts(totalProducts + contador)
      addToast(producto)
      setCart(copia)

    } else {

      const findedProduct = findProduct(producto)
      findedProduct.amount = findedProduct.amount + contador
      const copyFiltered = removeProduct(producto)
      copyFiltered.push(findedProduct)
      setTotalProducts(totalProducts + contador)
      addToast(producto)
      setCart(copyFiltered)

    }
  }
  const addToast = (producto) => {

    const nombre = '¡Agregaste ' + producto.type + ' ' + producto.description + ' al carrito!'
    toast.dismiss()
    toast.success(nombre, {
      position: toast.POSITION.TOP_CENTER
    })
  }

  const removeProduct = (producto) => {

    const filteredCart = cart.filter(item => item.id !== producto.id)
    return filteredCart
  }

  const deleteProduct = (producto) => {
    const copia = [...cart]
    copia.pop(producto)
    toast.dismiss()
    toast.warning('¡Eliminaste ' + producto.type + ' ' + producto.description + ' del carrito!', {
      position: toast.POSITION.TOP_CENTER
    })
    setTotalProducts(totalProducts - producto.stock)
    setCart(copia)
    if (cart.lenght === 0) {
      cleanCart()
    }
  }

  const cleanCart = () => {
    setCart([])
    setTotalProducts(0)
  }

  const inCart = (producto) => {
    const findedProduct = findProduct(producto)

    if (findedProduct !== undefined) {
      return true
    } else {
      return false
    }
  }

  const findProduct = (producto) => {
    return cart.find((item) => item.id === producto.id)
  }

  const totalPrice = cart.reduce((suma, item) => suma + item.price * item.amount, 0)

  const valorDelContexto = {
    cart: cart,
    totalProducts: totalProducts,
    setCart: setCart,
    setTotalProducts: setTotalProducts,
    addProduct: addProduct,
    removeProduct: removeProduct,
    cleanCart: cleanCart,
    inCart: inCart,
    findProduct: findProduct,
    deleteProduct: deleteProduct,
    user: user,
    setUser: setUser,
    totalPrice: totalPrice,
    id: idSale,
    setIdSale: setIdSale
  }

  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )

  }

export default CartProvider