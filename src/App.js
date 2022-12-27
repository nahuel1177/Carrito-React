import './App.css';
import Footer from './components/Footer';
import Header from './components/Header.js';
import Main from './components/Main';
import ItemsListContainer from './components/ItemListContainer'

const App =() => {
  return (
    <>
      <Header/>
      <ItemsListContainer greeting="Las Mejores Ofertas en Hardware"/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App;
