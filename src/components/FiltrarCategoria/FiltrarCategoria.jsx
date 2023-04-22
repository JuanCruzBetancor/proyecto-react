import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore} from 'firebase/firestore'
import { CartContext } from '../../Context/CartContext'
import Filtrar from './Filtrar';
const FiltrarCategoria = () => {
    const { addToCart } = useContext(CartContext);
    const {category} = useParams()
    const [data, setData] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const djProducts = collection(db, 'items')
    
        getDocs(djProducts).then((snapshot)=>{
            if (snapshot === 0) {
                console.log('no hay resultado')
            }
            
            setData(snapshot.docs.map((doc) =>({id: doc.id, ...doc.data() })))
            
        })
        }, [category]);
        const filteredElementsArray = data.filter(element => element.category === category);
    return (
        <>
        <Filtrar/>
        <div className='contenedor-search'>
    {filteredElementsArray.length > 0 ? (
        filteredElementsArray.map(element => (
            <div key={element.id}>
                <div className="card-fluid">
                    <div className="card">
                        <img src={element.image} className="img-fluid rounded-start " alt={element.title} />
                        <div className="card-body">
                            <h5 className="card-title">{element.title}</h5>
                            <p className="card-text"><small className="text-muted">Talle: {element.waist}</small></p>
                            <p className="card-text">Precio: ${element.price}</p>
                            <button type='button' id={element.id} className="btn btn-primary agregar botones" onClick={() => addToCart(element, 1)}>Agregar producto al carrito!</button>
                        </div>
                    </div>
                </div>
            </div>
        ))
    ) : (
        <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Cargando...</span>
                    </div>
                </div>
    )}
</div>
</>)
}

export default FiltrarCategoria
