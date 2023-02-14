import React from 'react'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Navbar  from './Navbar/Navbar';
const Landing = () => {
    return (
    <>
        <Navbar />
        <ItemListContainer greeting='Bienvenidos a BetanSport!! No busques mas, estas en el lugar indicado. Ofrecemos ropa deportiva de las mejores marcas, los mejores precios garantizados y con su compra seleccionada le realizamos un 10% de descuento adicional.'/>
    </>
)
}

export default Landing
