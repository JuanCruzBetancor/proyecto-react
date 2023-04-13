import React, { useContext, useEffect, useState } from 'react'
import {addDoc, collection, docs, getDocs, getFirestore} from 'firebase/firestore'
import { Link, useParams } from 'react-router-dom'
import './search.css'
import { CartContext } from './Context/CartContext'

const SearchElements = () => {
    const { searchValue } = useParams();
    const [data, setData] = useState([]);
    const { addToCart } = useContext(CartContext);
        useEffect(() => {
            const db = getFirestore();
            const djProducts = collection(db, 'items')
        
            getDocs(djProducts).then((snapshot)=>{
                if (snapshot === 0) {
                    console.log('no hay resultado')
                }
                
                setData(snapshot.docs.map((doc) =>({id: doc.id, ...doc.data() })))
                
            })
            }, [searchValue]);
            const filteredElementsArray = data.filter(element => element.category === searchValue);
            
    
return (
    <div className='contenedor-search'>
    {filteredElementsArray.length > 0 ? (
        filteredElementsArray.map(element => (
            <div key={element.id}>
                <div className="card-fluid">
                    <div className="card">
                        <img src={element.image} className="img-fluid rounded-start " alt={element.title} />
                        <div className="card-body">
                            <h5 className="card-title">{element.title}</h5>
                            <p className="card-text">{element.description}</p>
                            <p className="card-text"><small className="text-muted">Talle: {element.waist}</small></p>
                            <p className="card-text">Precio: ${element.price}</p>
                            <button type='button' id={element.id} className="btn btn-primary agregar botones" onClick={() => addToCart(element, 1)}>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        ))
    ) : (
        <div>
        <div className="alert alert-danger alert-search">No se encontraron resultados. Por favor vuelva a intertar con algunos de los valores mencionados. Como por ej: camperas, medias y remeras</div>
        <div className='contenedorSearch'>
        <Link to={'/'}>
                <button className='btn btn-primary boton-search'>Ver Catalogo</button>
        </Link>
        </div>
        </div>
    )}
</div>
)
}

export default SearchElements
