import { useState } from "react"
import { Button } from 'react-bootstrap';

const ItemCount = ({ productos, producto, stock, onAdd }) => {

    const [amount, setAmount] = useState(1)
    const [plusState, setPlusState] = useState()
    const [subtractState, setSubtractState] = useState()

    const handleSumar = () => {
        if (amount < stock) {
            setAmount(amount + 1)
            setSubtractState(false)
        }else{
            setPlusState(true)
        }
    }

    const handleRestar = () => {
        if (amount > 1  && [amount > stock]) {
            setAmount(amount - 1)
            setPlusState(false)
        }else{
            setSubtractState(true)
        }
    }

    const handleAgregar = () => {
        onAdd(producto, amount)
    }

    // const handleResetear = () => {
    //     setContador(1)
    // }

    return (
        <>
            {/* <Button onClick={handlerResetear}>reset</Button> */}
            <div id="amount-container">
                <Button onClick={handleSumar} disabled={plusState} id="btn-count">+</Button>
                <div id="amount">{amount}</div>
                <Button onClick={handleRestar} disabled={subtractState} id="btn-count">-</Button>
            </div>
            <br />
            <Button onClick={handleAgregar} id="btn-add">Agregar</Button>
        </>
    )
}

export default ItemCount