import { collection, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { toast } from 'react-toastify';
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {

        //toast.info("Cargando Producto...")

        const productsCollection = collection(db,"products")
        const referencia = doc(productsCollection, id)
        const pedido = getDoc(referencia)

        pedido
            .then((respuesta) => {
                const producto = {...respuesta.data(), id: respuesta.id}
                setProduct(producto)
                //toast.dismiss()
                //toast.success("Producto cargado!")
            })
            .catch((error) => {
                //toast.dismiss()
                //toast.error("Error al cargar producto!")
            })


    }, [product, id])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4" id="product-container">
            <ItemDetail producto={product} />
        </div>
    )
}

export default ItemDetailContainer