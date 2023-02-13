import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { contexto } from "./CartProvider";

const ItemDetail = (props) => {

    const { addProduct } = useContext(contexto)

    const onAdd = (producto, contador) =>{
        addProduct(producto, contador)
    }

    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"../" + props.producto.imagen} />
                <Card.Body>
                    <Card.Title>{props.producto.tipo}</Card.Title>
                    <Card.Text>
                        {props.producto.descripcion}
                    </Card.Text>
                    <Card.Text>
                        ${props.producto.precio}
                    </Card.Text>
                </Card.Body>
                <ItemCount producto={props.producto} stock={props.producto.stock} onAdd={onAdd} />
            </Card>
    )
}

export default ItemDetail