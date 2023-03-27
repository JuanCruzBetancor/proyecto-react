import React, {useState, useEffect} from 'react'
import './item.css'
import ItemList from '../ItemList/ItemList'
import {collection, getDocs, getFirestore} from 'firebase/firestore'



const ItemListContainer = (props) => {
    const [items, setItems] = useState();
useEffect(()=>{
    const db = getFirestore();
    const djProducts = collection(db, 'items')

    getDocs(djProducts).then((snapshot)=>{
        if (snapshot === 0) {
            console.log('no hay resultado')
        }
        
        setItems(snapshot.docs.map((doc) =>({id: doc.id, ...doc.data() })))
        
    })
}, [])

return (
    <>
        <div className="alert alert-info posicion-alerta" role="alert">
            {props.greeting}
        </div>
        
            <ItemList items={items}/>
        
    </>
)
}

export default ItemListContainer
