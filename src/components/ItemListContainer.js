import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const params = useParams()

    useEffect(() => {
        console.log("Inicio")
        toast.info("Cargando Productos...")
        let filter

        const productsCollection = collection(db, "products")

        if (!params.categoria) {
            filter = productsCollection
        } else {
            filter = query(productsCollection, where('type', '==', params.categoria))
        }

        const pedido = getDocs(filter)

        pedido
            .then((respuesta) => {

                const items = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setProducts(items)
                toast.dismiss()
                toast.success("Productos cargados!")
            })

            .catch((error) => {
                toast.dismiss()
                toast.error("Error al cargar productos!")
            })

    }, [params.categoria, products])

    return (

        <div className="row row-cols-1 row-cols-md-3 g-4" id="product-container">

            <ItemList productos={products} />

        </div>

    )
}

export default ItemListContainer;