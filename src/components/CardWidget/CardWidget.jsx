import React from 'react'
import Carrito from '../../assets/multimedia/shoppingcart_80945.png'
const CardWidget = () => {
return (
    <>
    <div className='carrito'>
    <img className='icono-carrito' src={Carrito} alt="" />
        <p className='cantidad-carrito'>5</p>  
    </div>
    </>
)
}

export default CardWidget