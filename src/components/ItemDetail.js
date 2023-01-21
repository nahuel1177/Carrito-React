import Card from 'react-bootstrap/Card';

const ItemDetail = (props) => {

    return (
        <div>
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
            </Card>
        </div>
    )
}

export default ItemDetail