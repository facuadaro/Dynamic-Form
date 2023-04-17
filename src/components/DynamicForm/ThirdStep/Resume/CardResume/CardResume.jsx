import { Card } from 'react-bootstrap'
import './CardResume.css'

function CardResume(props) {

  const { title, subtitle, text} = props

  return (
    <div>
      <Card className='text-center p-2 card-resume'>
        <Card.Body>
          <Card.Subtitle>
            <b>{subtitle}</b>
          </Card.Subtitle>
          <Card.Title>{title && title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardResume