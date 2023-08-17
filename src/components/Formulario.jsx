import React from 'react'
import { Button, Card, Col, Container, Form, FormControl, Row } from 'react-bootstrap'
import { useForm } from '../hooks'

export const Formulario = () => {
  const { serialize } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    console.log(formData)
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
                  <FormControl type="text" size="sm" name="mascota" placeholder='Nombre de la mascota' />
                </Col>
              </Row>
              <Row className='my-2'>
                <Col sm>
                  <label>Nombre propietario</label>
                  <FormControl  type="text" size="sm" name="dueno" placeholder='Nombre del propietario' />
                </Col>
              </Row>
              <Row className='my-2'>
                <Col sm>
                  <label>Email</label>
                  <FormControl  type="email" size="sm" name="email" placeholder='Email de Contacto' />
                </Col>
              </Row>
              <Row className='my-2'>
                <Col sm>
                  <label>Alta</label>
                  <FormControl  type="date" size="sm" name="alta" />
                </Col>
              </Row>
              <Row className='my-2'>
                <Col sm>
                  <label>Sintomas</label>
                  <FormControl as={"textarea"} type="text" size="sm" name="sintomas" placeholder='Describa los sintomas' />
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
