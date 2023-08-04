import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, FormControl, Row } from 'react-bootstrap'

export const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombreMascota, nombrePropietario, email, date })
  }
  return (
    <>
      <Container fluid>
        <Col className='text-center my-4' sm="auto">
          <h3><strong>Seguimiento pacientes</strong></h3>
          <p>Añade Pacientes y <span className='text-primary'>Administralos</span></p>
        </Col>
        <Card className='mx-auto' >
          <Form onSubmit={handleSubmit}>
            <Card.Body>
              <Row className='my-2'>
                <Col sm>
                  <label>Nombre mascota</label>
                  <FormControl className='' type="text" size="sm" name="mascota" value={nombreMascota} placeholder='Nombre de la mascota' onChange={e => setNombreMascota(e.target.value)} />
                </Col>
              </Row>
              <Row className='my-2'>
                <Col sm>
                  <label>Nombre propietario</label>
                  <FormControl className='' type="text" size="sm" name="duenio" value={nombrePropietario} placeholder='Nombre del propietario' onChange={e => setNombrePropietario(e.target.value)} />
                </Col>
              </Row>
              <Row className='my-2'>
                <Col sm>
                  <label>Email</label>
                  <FormControl className='' type="email" size="sm" name="email" value={email} placeholder='Email de Contacto' onChange={e => setEmail(e.target.value)} />
                </Col>
              </Row>
              <Row className='my-2'>
                <Col sm>
                  <label>Alta</label>
                  <FormControl className='' type="date" size="sm" name="alta" value={date} onChange={e => setDate(e.target.value)} />
                </Col>
              </Row>
              <Row className='my-2'>
                <Col sm>
                  <label>Sintomas</label>
                  <FormControl as={"textarea"} className='' type="text" size="sm" name="sintomas" value={sintomas} placeholder='Describa los sintomas' onChange={e => setSintomas(e.target.value)} />
                </Col>
              </Row>
              <Button type="submit" size="sm" className='w-100 my-2'>
                Guardar
              </Button>
            </Card.Body>

          </Form>
        </Card>
      </Container>
    </>
  )
}
