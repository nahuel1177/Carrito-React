import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos, setProductos] = useState([])
    const params = useParams()

    useEffect(() => {

        const pedido = fetch("./productos.json")

        pedido
            .then((respuesta) => {

                const productos = respuesta.json()

                return productos

            })
            .then((productos) => {


                if (params.categoria) {

                    setProductos(productos.filter(prod => prod.tipo === params.categoria))
                    setLoad(true)

                }else{

                setProductos(productos)
                setLoad(true)
                
                }

            })
            .catch((error) => {

                console.log(error)

            })

    }, [params.categoria])

    return (

        <div className="row row-cols-1 row-cols-md-3 g-4" id="product-container">

            {load ? null : 'Cargando...'}
            <ItemList productos={productos} />

        </div>

    )
}

export default ItemListContainer;