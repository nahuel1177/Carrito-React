import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import CheckOut from './CheckOut';

const Cart = () => {

  // const handleClick = (e) =>{

  // }

  return (
    // <Container fluid="md">
    <div className="row row-cols-1 row-cols-md-6 g-5" id="product-container">
      {/* <Button onClick={handleClick}>Procesar Compra</Button> */}
      <Button><Link className="header__link" to="/checkuot" id="link-compra">Procesar Compra</Link></Button>
    </div>
    // </Container>
  )
}

export default Cart