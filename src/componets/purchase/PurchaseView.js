import React, { useState, useEffect, Fragment } from 'react'
import { ModalPurchase } from './ModalPurchase';


const PurchaseView = () => {
    
    const [estados, setEstados] = useState([]);
    const [estado, setEstado] = useState({}); // yo le mandaria una accion

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function getData(){
        const res = await fetch("https://www.toroto.mx/api/projects");
        res.json()
        .then(res => {            
            setEstados(res)
        })
            
        .catch(err => console.log(err));
    }

    useEffect(()=>{
        getData();
    },[]);

    
    return (
        <>
        <div className="purchase">
            {
                estados.map(item => (
                    <Fragment key={item.location}>
                        <div className="bondInfo">
                            <h1>{item.name}</h1>
                            <h1 className="resaltar">{item.offsetPrice}</h1>
                            <h2>{item.availableOffsets} Bonos disponibles</h2>

                            <button className="btnBuy" onClick={
                                ()=> {
                                    console.log(item)
                                    setEstado(item)
                                    handleShow(true)
                                }
                            }>Comprar</button>
                        </div>

                        <div className="proyectInfo row">
                            <div className="col-12 col-lg-4 col-md-4">
                                <img src={item.img}></img>
                            </div>
                            
                            
                            <div className="col-12 col-lg-8 col-md-8">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </Fragment>
                ))
            }
            {
                show &&
                <ModalPurchase
                    handleClose = {handleClose}
                    show = {show}
                    estado = {estado}
                ></ModalPurchase>
            }
        </div>
        </>
    )
}

export default PurchaseView
