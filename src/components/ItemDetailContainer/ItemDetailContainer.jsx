import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './style.css'


const productos = [   
    {id: '1', nombre: "Medias Adidas",descripcion: "Las clásicas 3-Stripes con tu ropa preferida son uno de los productos estrella de la marca debido a su gran calidad y practicidad.", precio: 2300, marca: "adidas", categoria: "medias", talle: "unico", cantidad: 1, imagen: '../../assets/multimedia/medias-adidas.jpg'},
    {id: '2', nombre: "Medias Puma",descripcion: "Medias Puma Sneaker De Moda Para Hombre.", precio: 2400, marca: "puma", categoria: "medias", talle: "unico", cantidad: 1, imagen: '../../assets/multimedia/medias-puma.jpg'},
    {id: '3', nombre: "Medias Nike",descripcion: "Para entrenamientos exigentes presentamos las Medias Nike Ankle que te brindan comodidad y ajuste cuando lo necesitas.", precio: 2600, marca: "nike", categoria:"medias", talle: "unico", cantidad: 1, imagen: '../../assets/multimedia/medias-nike.jpg'},
    {id: '4', nombre: "Camiseta Boca Jrs",descripcion: "Género: Hombre · Adecuado para: Fútbol · Material: Poliéster · Estilo de indumentaria: Con Logo · Composición: 100% poliéster reciclado · Cuello: En V.", precio: 16500, marca: "adidas", categoria:"remeras", talle: "L", cantidad: 1, imagen: '../../assets/multimedia/camiseta-boca.jpg'},
    {id: '5', nombre: "Camiseta Paris",descripcion: " Género: Unisex · Adecuado para: Todo el día · Composición: 100 % poliéster reciclado · Cuello: Redondo · Manga: Corta · Calce: Regular · Liga: Europa.", precio: 16799, marca: "nike", categoria:"remeras", talle: "M", cantidad: 1, imagen: '../../assets/multimedia/camiseta-paris.jpg'},
    {id: '6', nombre: "Camiseta Independiente",descripcion: "Género: Hombre ; Adecuado para: Todo el dia ; Material: Poliester ; Cuello: En V ; Manga: Corta.", precio: 14500, marca: "puma", categoria:"remeras", talle: "S", cantidad: 1, imagen: '../../assets/multimedia/camiseta-independiente.jpg'},
    {id: '7', nombre: "Campera Adidas",descripcion: "No importa lo que te depare el día, preparate para cualquier actividad con esta campera deportiva adidas que te permite moverte de forma natural.", precio: 19500, marca: "adidas", categoria:"camperas", talle: "L", cantidad: 1, imagen: '../../assets/multimedia/campera-adidas.jpg'},
    {id: '8', nombre: "Campera Puma",descripcion: " Esta Campera deportiva es llamativa y tiene un cierre completo con un cuello alto muy a la moda.", precio: 24000, marca: "puma", categoria:"camperas", talle: "S", cantidad: 1, imagen: '../../assets/multimedia/campera-puma.jpg'},
    {id: '9', nombre: "Campera Nike",descripcion: " Con la Campera Nike Sportswear Essential tus entrenamientos se transformarán en el mejor momento del día.", precio:  20500, marca: "nike", categoria: "camperas", talle: "M", cantidad: 1, imagen: '../../assets/multimedia/campera-nike.jpg'}  
    ];
const ItemDetail = () => {

    const {id} = useParams()
    const [data, setData] = useState(null);
    useEffect(() =>{
        const producto = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos.find(p => p.id === id))
            }, 1000);    
        })
        producto.then((res)=> setData(res))
        
    }, [id]);
    
    
    return (
        <div className='contenedor'>
            {
                data ?
                <>
                <div className='class="card" style="width: 18rem;"'>
                <img src={data.imagen} alt={data.nombre} />
                <h1>{data.nombre}</h1>
                <p>Descripcion: {data.descripcion}</p>
                <h5>Categoria: {data.categoria}</h5>
                <h5>Talle: {data.talle}</h5>
                <h5>Precio: ${data.precio}</h5>
                </div>
                </>
                :
                <p>cargando...</p>
                
            }
        </div>
)
}

export default ItemDetail
