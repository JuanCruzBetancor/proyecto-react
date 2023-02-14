import React from 'react'
import './item.css'

const ItemListContainer = (props) => {
return (
    <>
        <div class="alert alert-info posicion-alerta" role="alert">
            {props.greeting}
        </div>
    </>
)
}

export default ItemListContainer
