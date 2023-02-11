import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.tipo}</Card.Title>
          <Card.Text>
            {producto.descripcion}
          </Card.Text>
          <Link to={"/item/" + producto.id}>Ver más</Link>
        </Card.Body>
      </Card>

  );
};

export default Item;
