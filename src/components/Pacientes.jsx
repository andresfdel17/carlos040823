import React from 'react'
import { Col } from 'react-bootstrap'

export const Pacientes = () => {
    return (
        <>
            <Col className='text-center my-4' sm="auto">
                <h3><strong>No hay pacientes</strong></h3>
                <p>Comienza agregando pacientes <span className='text-primary'>y apareceran en este lugar</span></p>
            </Col>
        </>
    )
}
