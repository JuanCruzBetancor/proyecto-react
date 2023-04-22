import React from 'react'
import { Link } from 'react-router-dom'

const Filtrar = () => {

    return (
    <div>
        <div className='botones-filtrado'>
            <Link to={'/filtrado/medias'}><button className='boton-filtro btn btn-warning'>Medias</button></Link>
            <Link to={'/filtrado/camperas'}><button className='boton-filtro btn btn-warning'>Campera</button></Link>
            <Link to={'/filtrado/remeras'}><button className='boton-filtro btn btn-warning'>Remeras</button></Link>
        </div> 
    </div>
)
}

export default Filtrar
