import { db } from "../firebase"
import { useState } from "react"
import { Button } from 'react-bootstrap';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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

    return (
        <>
            <div id="amount-container">
                <Button onClick={handleSumar} disabled={plusState} id="btn-count">+</Button>
                <div id="amount">{amount}</div>
                <Button onClick={handleRestar} disabled={subtractState} id="btn-count">-</Button>
            </div>
            <br />
            <Button onClick={handleAgregar} id="btn-add">Agregar <AddShoppingCartIcon/></Button>
        </>
    )
}

export default ItemCount