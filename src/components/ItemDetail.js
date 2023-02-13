import { db } from "../firebase"
import { useContext } from 'react';
import { contexto } from "./CartProvider";
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';


const ItemDetail = ({producto}) => {

    const { addProduct } = useContext(contexto)

    const onAdd = (producto, contador) =>{
        addProduct(producto, contador)
    }

    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"../" + producto.image} />
                <Card.Body>
                    <Card.Title>{producto.type}</Card.Title>
                    <Card.Text>
                        {producto.description}
                    </Card.Text>
                    <Card.Text>
                        ${producto.price}
                    </Card.Text>
                </Card.Body>
                <ItemCount producto={producto} stock={producto.stock} onAdd={onAdd} />
            </Card>
    )
}

export default ItemDetail