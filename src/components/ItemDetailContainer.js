import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(false)
    const props = useParams()

    useEffect(() => {

        const pedido = fetch("../productos.json")

        pedido
            .then((respuesta) => {

                const productos = respuesta.json()
                return productos

            })
            .then((productos) => {
                setProducts(productos)
                setProduct(productos.find((prod) => prod.id === parseInt(props.id)))
                setLoad(true)

            })
            .catch((error) => {
                console.log(error)
            })


    }, [product, props.id])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4" id="product-container">
                {load ? null : 'Cargando...'}
                <ItemDetail producto={product} />
        </div>
    )
}

export default ItemDetailContainer