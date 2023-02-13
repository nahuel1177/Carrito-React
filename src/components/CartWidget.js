import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { contexto } from './CartProvider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {

    const { totalProducts } = useContext(contexto)

    return(
            <div className='shopping-cart'>
            <span><ShoppingCartIcon/></span>
            <Badge pill bg="danger">{totalProducts}</Badge>
            </div>
    )
}

export default CartWidget;