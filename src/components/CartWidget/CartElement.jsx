import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import {addDoc, collection, docs, getDocs, getFirestore} from 'firebase/firestore'
import './cart.css'
import { Link } from 'react-router-dom'

const CartElement = () => {
    const {cart, clearCart, isInCart,  removeFromCart, getTotalQuantity, getTotal} = useContext(CartContext)
    const [data, setData] = useState(null);
    
    
    useEffect(()=>{
        const productosCarrito = getFirestore()
        const djCarrito =  collection(productosCarrito, 'items')
        getDocs(djCarrito).then((snapshot)=>{
            setData(snapshot.docs.map((doc) =>({id: doc.id, ...doc.data() })))
        })
    }, []) 

    const [buyerNombre, setBuyerNombre] = useState('');
    const [buyerApellido, setBuyerApellido] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');
    const [buyerDireccion, setBuyerDireccion] = useState('');
    const [buyerCiudad, setBuyerCiudad] = useState('');
    const [buyerCodigoPostal, setBuyerCodigoPostal] =useState('');
    const [buyerItems, setBuyerItems] = useState(cart);
    const [buyerTotal, setBuyerTotal] =useState(getTotal) ;
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    
    const handlerSubmit = () =>{
        
        const order ={
            buyer:{
                nombre: buyerNombre,
                apellido: buyerApellido,
                email: buyerEmail,
                direccion: buyerDireccion,
                ciudad: buyerCiudad,
                codigoPostal: buyerCodigoPostal
            },
            items:  buyerItems,
            total: buyerTotal,
        } 
        addDoc(orderCollection, order)
        .then((docRef) => {
            console.log(docRef)
        })
    }
    
    if (cart.length === 0) {
        return (
            <>
            <div class="alert alert-danger alertCart" role="alert">
                <Link to={'/'}>
                    <a href="#" class="alert-link " ><p className='alertCart'>Aun no has agregado productos al carrito.</p></a>
                </Link>
            </div>
            <div className='catalogo-boton'>
                <h3 className='catalogo'>Si desea ver nuestro catalogo haga click en el siguente boton!!</h3>
                <Link to={'/'}>
                <button className='btn btn-primary boton-catalogo'>Ver Catalogo</button>
                </Link>
                
            </div>
            </>
            )
    }
    
    return (
    <>
        {cart.map((item) => (
            <div key={item.id} className='productos-carrito'>
                <div class="card mb-6">
                <div class="row g-12">
                <div class="col-md-6">
                <img src={item.image} class="img-fluid rounded-center" alt={item.title}/>
                </div>
                    <div class="col-md-12">
                <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">Talle: {item.waist}</p>
                    <p class="card-text">Cantidad: {item.quantity}</p>
                    <p class="card-text">Precio ${item.price * item.quantity}</p>
                </div>
                <button type="button" class="btn btn-danger" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
                </div>
                </div>
            </div>
            
        ))}
            <form className='formulario' onSubmit={handlerSubmit()}>
                <div class="row">
                    <div class="col-6">
                        <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" value={buyerNombre} onChange={(e) => setBuyerNombre(e.target.value) }/>
                    </div>
                    <div class="col-6">
                        <input type="text" class="form-control" placeholder="Apellido" aria-label="Apellido" value={buyerApellido} onChange={(e) => setBuyerApellido(e.target.value) }/>
                    </div>
                </div>
                <div className='row'>
                <div class="col-md-6">
                    <input type="email" class="form-control" id="inputEmail4"placeholder="Email" aria-label="Email" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value) }/>
                </div>
                <div class="col-6">
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Direccion"aria-label="Direccion" value={buyerDireccion} onChange={(e) => setBuyerDireccion(e.target.value) }/>
                </div>
                </div>
                <div className='row'>
                <div class="col-md-6">
                    <input type="text" class="form-control" id="inputCity" placeholder="Ciudad" aria-label="Ciudad" value={buyerCiudad} onChange={(e) => setBuyerCiudad(e.target.value) }/>
                </div>
                <div class="col-md-2">
                    <input type="number" class="form-control" id="inputZip" placeholder="Código postal" aria-label="Código postal" value={buyerCodigoPostal} onChange={(e) => setBuyerCodigoPostal(e.target.value) }/>
                </div>
                </div>
                <div className='totales-carrito'>
                    <h5>Cantidad Total: {getTotalQuantity()}</h5>
                    <h5 value={buyerTotal}onChange={(e)=>setBuyerTotal(e.target.value)}>Precio Total: ${getTotal()}</h5>
                </div>
                <div className='botones-carrito'>
                        <button type="button" class="btn btn-danger">Vaciar Carrito</button>
                        <button type="submit" class="btn btn-success">Finalizar Compra</button>
                    </div>
                </form>
    </>
    )
    
}

export default CartElement
