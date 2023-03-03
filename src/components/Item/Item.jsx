import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({producto}) => {
return (
    <div id='producto-contenedor'>
    <div className='card style'>
        <img src={producto.imagen} alt={producto.nombre}/>
            <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">Talle: {producto.talle}</p>
            <p className="card-text">Precio:${producto.precio}</p>
            <div className='posicion-botones'>
            <Link to={`/productos/${producto.id}`}>
            <button type="button" class="btn btn-warning botones">Ver detalles</button>
            </Link>
            <a href="#" id={producto.id} class="btn btn-primary agregar botones">Comprar</a>
            </div>
        </div>
    </div>
    </div>
)
}

export default Item
