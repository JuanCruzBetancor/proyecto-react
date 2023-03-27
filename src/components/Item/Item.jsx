import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'


const Item = ({items}) => {
    const {addToCart} = useContext(CartContext)
return (
    <>
    <div id='producto-contenedor'>
    <div className='card style'>
        <img src={items.image} alt={items.title}/>
            <div className="card-body">
            <h5 className="card-title">{items.title}</h5>
            <p className="card-text elementos">Marca: {items.brand}</p>
            <p className="card-text elementos">Talle: {items.waist}</p>
            <p className="card-text elementos">Precio: ${items.price}</p>
            <div className='posicion-botones'>
            <Link to={`/productos/${items.id}`}>
            <button type="button" class="btn btn-warning botones">Ver detalles</button>
            </Link>
            <button type='button' id={items.id} class="btn btn-primary agregar botones" onClick={() => addToCart(items, 1)}>Comprar
            </button>
            </div>
        </div>
    </div>
    </div>
    </>
)
}

export default Item
