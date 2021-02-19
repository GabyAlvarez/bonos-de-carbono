import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


const Validation = () => {
    return (
        <>
        <div className="seccionSearch">
            <div className="search">
                <InputGroup className="mb-3">
                    <FormControl aria-describedby="basic-addon1" />

                    <InputGroup.Append>
                        <button className="btnSearch" variant="outline-secondary">Buscar</button>
                    </InputGroup.Append>
                </InputGroup>
            </div>

            <table className="tableClient">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Empresa</th>
                    <th>Huella carbono</th>
                    <th>Bonos adquiridos</th>
                    <th>Fecha</th>
                    <th>Proyectos</th>
                    <th>Certificadi carbono neutra</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Grupo Modelo México</td>
                    <td>130 tCO2</td>
                    <td>130</td>
                    <td>1/01/2021</td>
                    <td>Recarga de Acuífero en Hidalgo</td>
                    <td><a>Si</a></td>
                    </tr>
                    </tbody>
            </table>
        </div>
        </>
    )
}

export default Validation
