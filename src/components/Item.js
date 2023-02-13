import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.image} />
        <Card.Body>
          <Card.Title>{producto.type}</Card.Title>
          <Card.Text>
            {producto.description}
          </Card.Text>
          <Link to={"/item/" + producto.id}>Ver más</Link>
        </Card.Body>
      </Card>

  );
};

export default Item;
