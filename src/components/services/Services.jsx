import './Services.css'
import { Col, Container, Row } from 'react-bootstrap'
import imgCourse1 from '../../assets/img/hbo.jpeg'
import imgCourse2 from '../../assets/img/netflix.jpeg'
import imgCourse3 from '../../assets/img/prime.jpeg'
import CardService from './CardService/CardService'

function services() {

    const servicesArray = [
        {
            title: "HBO MAX",
            subtitle: "HBO Max, la plataforma streaming inigualable de HBO para ver las mejores películas, series y todos los nuevos Max Original",
            image: imgCourse1,
            footer: "Go to the course ➡️",
            link: "https://www.hbomax.com/ar/es"
        },
        {
            title: "Netflix",
            subtitle: "Disfruta de Netflix, películas y series en streaming en tu smart TV, consola, PC, Mac, móvil, tableta y más dispositivos.",
            image: imgCourse2,
            footer: "Go to the course ➡️",
            link: "https://www.netflix.com/browse"
        },
        {
            title: "Prime Video",
            subtitle: "Disfruta de Amazon Original exclusivos, películas y series populares. Disfruta ahora, cancela cuando quieras.",
            image: imgCourse3,
            footer: "Go to the course ➡️",
            link: "https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root"
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