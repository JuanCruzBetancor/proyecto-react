import React, { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {

    const [searchValue, setSearchValue] = useState('');
    

    const handleInputChange = (event) => {
        setSearchValue(event.target.value.toLowerCase());
    };


    const handleSearch = (event) => {
        event.preventDefault();
        window.location.href = `/search/${searchValue}`;
    };


return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
    <Link to={'/'} className="navbar-brand marca">BetanSport</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    
    <form className="d-flex" role="Buscar" onSubmit={handleSearch}>
        <input className="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar" value={searchValue}
        onChange={handleInputChange}/>
        <Link to={`/search/${searchValue}`}>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
        </Link>
        <p className='filtrar'>Buscar por categorias por ej: camperas, medias y remeras.</p>
    </form>
        <div>
            <CartWidget />
        </div>
    </div>
</nav>
</>
)
}

export default Navbar