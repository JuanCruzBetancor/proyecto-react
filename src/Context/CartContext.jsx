import React, {useState, createContext} from 'react'



export const CartContext = createContext({
    cart : [],
    clearCart : () => {},
    isInCart : () => {},
    addToCart : () => {},
    removeFromCart : () => {},
    getTotalQuantify : () => {},
    getTotal : () => {},
}); 

//Definiendo provider
const CartProvider = (props) =>{
    const [cart, setCart] = useState ([]);
    //vaciar carrito
    const clearCart = () => {
        setCart = ([]);
    }
    //producto en carrito
    const isInCart = (id) =>{
        return cart.find((items) => items.id === id) ? true : false
    } 
    //agregar producto
    const addToCart = (items, quantity) =>{
        if (isInCart(items.id)) {
            setCart(cart.map((cartItem) => {
                if (cartItem.id === items.id) {
                    return {...cartItem, quantity: cartItem.quantity + quantity}
                }
                    return cartItem
            }))
        }
        else{
            setCart([...cart, {...items, quantity}])
        }
    }; 
    //eliminar un producto del carrito
    const removeFromCart = (id) => {
        const updatedCart = [...cart]; 
        const itemIndex = updatedCart.findIndex(item => item.id === id); 
        if (itemIndex !== -1) {
        if (updatedCart[itemIndex].quantity > 1) {
            updatedCart[itemIndex].quantity = updatedCart[itemIndex].quantity - 1;
        } else {
            updatedCart.splice(itemIndex, 1);
        }
        setCart(updatedCart); 
        }
    };
    //obtener la cantidad total del carrito
    const getTotalQuantity = () =>{
        let cant = 0
        cart.forEach((e) => cant += e.quantity)
        return cant
    };
    //obtener total de precios
    const getTotal = () =>{
        let total = 0
        cart.forEach((e) => total += (e.quantity * e.price))
        return total
    };

    return (
        <CartContext.Provider value={{cart, clearCart, isInCart, addToCart, removeFromCart, getTotalQuantity, getTotal}}>
        {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider