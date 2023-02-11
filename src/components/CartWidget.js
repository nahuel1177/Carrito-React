import Badge from 'react-bootstrap/Badge';
import { useCart } from './CartProvider';

const CartWidget = () => {

    const {totalProductos} = useCart()

    return(
            <div className='shopping-cart'>
            <span className='material-icons'>shopping_cart</span>
            <Badge pill bg="danger">{totalProductos}</Badge>
            </div>
    )
}

export default CartWidget;