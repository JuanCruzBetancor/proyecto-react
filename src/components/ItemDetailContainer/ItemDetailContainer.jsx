import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import './style.css'
import {doc, getDoc, getFirestore} from 'firebase/firestore' 
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import Filtrar from '../FiltrarCategoria/Filtrar'

const ItemDetail = () => {
    const {addToCart} = useContext(CartContext)
    const {id} = useParams()
    const [data, setData] = useState(null);
    useEffect(() =>{
        
        const obtenerProductos = getFirestore()
        const djProduct = doc(obtenerProductos, 'items', id)
        
        
        getDoc(djProduct).then((snapshot)=>{
            setData( {id: snapshot.id, ...snapshot.data() } )
        })
        
    }, [id]);
    
    
    return (
        <>
        <Filtrar/>
        <div className='contenedor'>
            {
                data ?
                
                <div className='class="card descripcion" style="width: 18rem;"'>
                <div className='imagen-detalle'>
                    <img className='imagen' src= {data.image} alt={data.title} />
                    <h1>{data.title}</h1>
                </div>
                <p className='categoria-talle'>Descripcion: {data.description}</p>
                <h6 className='categoria-talle'>Categoria: {data.category}</h6>
                <h6 className='categoria-talle'>Talle: {data.wais}</h6>
                <h6 className='precio'>Precio: ${data.price}</h6>
                <div className='boton-categoria'>
                    <Link to={'/'}>
                        <button type="button" className='btn btn-dark botones-categoria'>Volver</button>
                    </Link>
                    <button type="button" className='btn btn-success botones-categoria' onClick={() => addToCart(data, 1)}>Agregar al carrito</button>
                </div>
                </div>
                :
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Cargando...</span>
                    </div>
                </div>
                
            }
        </div>
        </>
)
}

export default ItemDetail
