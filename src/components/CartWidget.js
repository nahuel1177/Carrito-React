import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return(
            <div className='shopping-cart'>
            <span className='material-icons'>shopping_cart</span>
            <Badge pill bg="danger">2</Badge>
            </div>
    )
}

export default CartWidget;