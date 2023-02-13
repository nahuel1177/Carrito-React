import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import CartProvider from './components/CartProvider';
import Footer from './components/Footer';
import Header from './components/Header.js';
import Main from './components/Main';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
      <ToastContainer/>
    </CartProvider>
  )
}

export default App;
