import { Col, Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { Formulario, Header, Pacientes } from './components';

function App() {
  useEffect(() => {
    document.title = 'Centro Medico'
  }, [])
  return (
    <>
      <Container fluid className='mt-5'>
        <Row className='justify-content-center'>
          <Col sm="auto">
            <Header />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row c>
          <Col sm>
            <Formulario />
          </Col>
          <Col sm>
            <Pacientes />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
