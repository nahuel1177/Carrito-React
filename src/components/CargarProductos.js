import { useState } from 'react';
import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';

const CargarProductos = () => {

    const handleClick = (e) => {

        fetch('/productos.json')

            .then(respuesta => respuesta.json())

            .then(respuesta => {

                respuesta.map(product => {

                    const productsCollection = collection(db, "products")

                    addDoc(productsCollection, product)

                        .then(docRef => {
                            console.log('Documento agregado con ID: ', docRef.id);
                        })
                        .catch(error => {
                            console.error('Error al agregar el documento: ', error);
                        });
                });
            })
            .catch(error => {
                console.error('Error al leer el archivo JSON: ', error);
            });
    };


    //

    //data.forEach(product => {addDoc(productsCollection, product))} 


    return (
        <div id="button"><Button onClick={handleClick}>Cargar</Button></div>
    )
}


export default CargarProductos