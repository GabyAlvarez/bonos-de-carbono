import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import logo from '../../assets/logoTotoro.png'
import facebook from '../../assets/iconFace.png'
import insta from '../../assets/iconInstagram.png'
import linkedin from '../../assets/iconLinkedIn.png'
import tuit from '../../assets/iconTuit.png'

const Footer = () => {
    return (
        <>
        <div className="footerSection">

            <img src={logo} className="logo"></img>

            <div className="redSocial">
                <img src={insta}></img>
                <img src={facebook}></img>
                <img src={linkedin}></img>
                <img src={tuit}></img>
            </div>
            <div className="menu">
            <ul>
                <li>
                    <Link to="/">Proyectos</Link>
                </li>
                <li>
                    <Link to="/purchase">Comprar Bonos</Link>
                </li>
                <li><a href="#validacion">Validación</a></li>
            </ul>
            </div>
            
        </div>
        </>
    )
}

export default Footer
