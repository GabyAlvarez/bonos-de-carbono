import React from 'react'
import texture from '../../assets/greenTexture.png'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const FirstView = () => {
    return (
        <>
        <div className="firstView">
            <div className="description">
                <h1>Conoce los proyectos que hacen posible construir una sociedad carbono neutra.</h1>
            </div>

            <div className="invitation">
                <p>Te gustaría que tu empresa sea carbono neutra. </p>
                <p>Aquí, puedes comprar bonos de carbono</p>
                <p>y alcanzar tu objetivo.</p>  
            </div>

            <div className="btnAction">
                <Link to="/Home/MapaMex">
                    <button>Conoce más</button>
                </Link>
            </div> 
        </div>

        <div className="line">
            <p>Este es el lugar donde puedes saber más acerca del núcleo de Toroto, los proyectos</p>
            <div>
                <img src={texture}></img>
            </div>
        </div> 
        </>
    )
}

export default FirstView
