import { useState } from "react"
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { contexto } from "./CartProvider";

const ItemCount = ({ product, stock, onAdd }) => {

    const [contador, setContador] = useState(1)
    const [plusState, setPlusState] = useState()
    const [subtractState, setSubtractState] = useState()

    const handleSumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
            setSubtractState(false)
        }else{
            setPlusState(true)
        }
    }

    const handleRestar = () => {
        if (contador > 1  && [contador > stock]) {
            console.log(contador)
            setContador(contador - 1)
            setPlusState(false)
        }else{
            setSubtractState(true)
        }
    }

    const handleAgregar = () => {
        onAdd(product, contador)
    }

    // const handleResetear = () => {
    //     setContador(1)
    // }

    return (
        <>
            {/* <Button onClick={handlerResetear}>reset</Button> */}
            <div id="amount-container">
                <Button onClick={handleSumar} disabled={plusState} id="btn-count">+</Button>
                <div id="amount">{contador}</div>
                <Button onClick={handleRestar} disabled={subtractState} id="btn-count">-</Button>
            </div>
            <br />
            <Button onClick={handleAgregar} id="btn-add">Agregar</Button>
        </>
    )
}

export default ItemCount