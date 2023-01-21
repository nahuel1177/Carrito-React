import './App.css';
import Footer from './components/Footer';
import Header from './components/Header.js';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';

const App =() => {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
