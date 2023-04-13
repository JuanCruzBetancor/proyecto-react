import React, { useContext, useEffect, useState } from 'react'
import {addDoc, collection, docs, getDocs, getFirestore} from 'firebase/firestore'
import { useParams } from 'react-router-dom'
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
        {filteredElementsArray.map(element => (
        <div key={element.id}>
            <div class="card-fluid">
            <div class="card">
            <img src={element.image} class="img-fluid rounded-start " alt={element.title}/>
            <div class="card-body">
            <h5 class="card-title">{element.title}</h5>
            <p class="card-text">{element.description}</p>
            <p class="card-text"><small class="text-muted">Talle: {element.waist}</small></p>
            <p class="card-text">Precio: ${element.price}</p>
            <button type='button' id={element.id} class="btn btn-primary agregar botones" onClick={() => addToCart(element, 1)}>Comprar
            </button>
            </div>
        </div>
        </div>
        </div>
    ))}
    </div>
)
}

export default SearchElements
