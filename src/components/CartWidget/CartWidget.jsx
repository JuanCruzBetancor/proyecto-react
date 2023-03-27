import React, {useContext} from 'react'
import Carrito from '../../assets/multimedia/shoppingcart_80945.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
const CartWidget = () => {

    const {getTotalQuantity} = useContext(CartContext)
    
return (
    <>
    <div className='carrito'>
    <Link to={`/cart`}>
    <img className='icono-carrito' src={Carrito} alt="" />
    </Link>
        <p className='cantidad-carrito'>{getTotalQuantity()}</p>  
    </div>
    </>
)
}

export default CartWidget