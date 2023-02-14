import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import './navbar.css'


const navbar = () => {
return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand marca" href="#">BetanSport</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <form className="d-flex" role="Buscar">
        <input className="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
    </form>
        <div>
            <CardWidget />
        </div>
    </div>
    
</nav>
</>
)
}

export default navbar