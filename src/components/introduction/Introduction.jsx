import { Col, Container, Row, Button } from 'react-bootstrap'
import './Introduction.css'

function Introduction() {
  return (
    <div className='introduction p-3 p-lg-5 mt-5'>
        <Container fluid>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={8}>
                    <h1 className='pl-2 text-center'>
                        Welcom to Dynamic Form <span className='pt-2 pb-4'>
                            that you will do everything that you want
                            </span>
                    </h1>
                    <h4 className='text-center pt-3'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut assumenda similique veniam in suscipit debitis blanditiis ducimus nam excepturi et voluptate magnam quas velit, eius nulla voluptatibus voluptates ullam temporibus inventore commodi incidunt vitae eum dolores iusto. Velit rerum placeat accusantium reiciendis itaque! Saepe nulla totam consequatur amet iusto nesciunt.
                    </h4>
                    <div className="d-flex container-actions mt-5">
                        <div className='container-buttons'>
                            <Button className='p-3' onClick={() => console.log("Click button")}>Get in Touch</Button>
                            <Button className='p-3'>Get in touch</Button>
                        </div>
                        <div className='btn-start-create'>
                            <a href="#dynamic-form">Start to create ➡️ </a>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Introduction