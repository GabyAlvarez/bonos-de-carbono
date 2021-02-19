import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

export const ModalPurchase = ({estado,show, handleClose}) => {

    const [total, setTotal] = useState(0.0);
    const [bonos, setBonos] = useState(1);
    const [price, setPrice] = useState(parseFloat((estado.offsetPrice).split(' ')[0]));

    return (
        <div>
            <Modal show={show} onHide={handleClose} className="modalContent">

                <Modal.Body className="modalBody row">
                    <div className="sectionModal">
                        <label for="cantidadBonos">Ingresa cantidad de bonos</label>
                        <input type="text" className="form-control" id="cantidadBonos" name="cantidadBonos" value={bonos} onChange={ (e) => setBonos(e.target.value)}/>

                        <label for="precio">Precio</label>
                        <input type="text" className="form-control" id="precio" name="precio" value={(estado.offsetPrice).split(' ')[0]} disabled/>

                        <label for="total">Total a pagar</label>
                        <input type="text"  className="form-control" id="total" name="total" value={parseFloat(bonos*price)}/>   

                        <button  onClick={handleClose} className="btn btn-outline-success">
                            Finalizar Compra
                        </button>

                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}
