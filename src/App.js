import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './components/CartProvider';
import Footer from './components/Footer';
import Header from './components/Header.js';
import Main from './components/Main';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
