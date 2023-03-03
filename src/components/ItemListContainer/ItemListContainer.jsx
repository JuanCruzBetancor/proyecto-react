import React,{useState, useEffect} from 'react'
import './item.css'
import ItemList from '../ItemList/ItemList'




const productos = [   
{id: '1', nombre: "Medias Adidas", precio: 2300, marca: "adidas", categoria: "medias", talle: "unico", cantidad: 1, imagen: '../../assets/multimedia/medias-adidas.jpg'},
{id: '2', nombre: "Medias Puma", precio: 2400, marca: "puma", categoria: "medias", talle: "unico", cantidad: 1, imagen: '../../assets/multimedia/medias-puma.jpg'},
{id: '3', nombre: "Medias Nike", precio: 2600, marca: "nike", categoria:"medias", talle: "unico", cantidad: 1, imagen: '../../assets/multimedia/medias-nike.jpg'},
{id: '4', nombre: "Camiseta Boca Jrs", precio: 16500, marca: "adidas", categoria:"remeras", talle: "L", cantidad: 1, imagen: '../../assets/multimedia/camiseta-boca.jpg'},
{id: '5', nombre: "Camiseta Paris", precio: 16799, marca: "nike", categoria:"remeras", talle: "M", cantidad: 1, imagen: '../../assets/multimedia/camiseta-paris.jpg'},
{id: '6', nombre: "Camiseta Independiente", precio: 14500, marca: "puma", categoria:"remeras", talle: "S", cantidad: 1, imagen: '../../assets/multimedia/camiseta-independiente.jpg'},
{id: '7', nombre: "Campera Adidas", precio: 19500, marca: "adidas", categoria:"camperas", talle: "L", cantidad: 1, imagen: '../../assets/multimedia/campera-adidas.jpg'},
{id: '8', nombre: "Campera Puma", precio: 24000, marca: "puma", categoria:"camperas", talle: "S", cantidad: 1, imagen: '../../assets/multimedia/campera-puma.jpg'},
{id: '9', nombre: "Campera Nike", precio:  20500, marca: "nike", categoria: "camperas", talle: "M", cantidad: 1, imagen: '../../assets/multimedia/campera-nike.jpg'}  
];


const ItemListContainer = (props) => {

    const [data, setData] = useState([]);
    useEffect(() =>{
        const getProductos = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 3000);
        });
        getProductos.then((res)=> setData(res));
    }, []);
return (
    <>
        <div className="alert alert-info posicion-alerta" role="alert">
            {props.greeting}
        </div>
        <div>
            <ItemList data={data}/>
        </div>
    </>
)
}

export default ItemListContainer
