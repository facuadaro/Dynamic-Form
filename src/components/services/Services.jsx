import './Services.css'
import { Col, Container, Row } from 'react-bootstrap'
import imgCourse1 from '../../assets/img/hbo.jpeg'
import imgCourse2 from '../../assets/img/netflix.jpeg'
import imgCourse3 from '../../assets/img/prime.jpeg'
import CardService from './CardService/CardService'

function services() {

    const servicesArray = [
        {
            title: "Wordpress Course",
            subtitle: "Lear all about this great CMS",
            image: imgCourse1,
            footer: "Go to the course ➡️",
            link: "#!"
        },
        {
            title: "Prestashop Course",
            subtitle: "Lear all about this great CMS",
            image: imgCourse2,
            footer: "Go to the course ➡️",
            link: "#!"
        },
        {
            title: "React Course",
            subtitle: "Lear all about this great CMS",
            image: imgCourse3,
            footer: "Go to the course ➡️",
            link: "#!"
        }
    ]

  return (
    <div className='services p-4 mt-5'>
        <Container fluid>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={8}>
                    <h2 className='footer-center'>Services</h2>
                    <h4 className='pb-3 footer-center'>Check some of my services that i did</h4>
                    <Row xs={1} md={3} className='g-4 mt-4'>
                        {servicesArray.map((service, index) => (
                            
                        <CardService service={service} key={index}/>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default services