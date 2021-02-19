import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Table from 'react-bootstrap/Table'


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
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    </tbody>
            </table>
        </div>
        </>
    )
}

export default Validation
