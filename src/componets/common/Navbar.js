import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import logo from '../../assets/logoTotoro.png'

const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <img src={logo} alt=""/>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">Proyectos</Link>
                    </li>
                    <li>
                        <Link to="/purchase">Comprar Bonos</Link>
                    </li>
                    <li>
                        <Link to="/validation">Validación</Link>
                    </li>
                </ul>
            </nav>

        </div>
            
        </>
    )
}

export default Navbar
