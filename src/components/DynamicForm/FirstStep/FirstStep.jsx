import { Container, Row } from 'react-bootstrap'
import './FirstStep.css'
import CardFruit from './CardFruit';
import { useState } from 'react';
import ListFruits from './Fruits.json'

function FirstStep() {

      
      const [selectedCard, setSelectedCard] = useState(null)
  
      const clickCard = (fruit) => {
          setSelectedCard(fruit.id)
          localStorage.setItem('fruitName', fruit.name)
          localStorage.setItem('iconFruit', fruit.icon)
      }

    return (
        <div>
            <h2>Choose your favorite fruit</h2>
            <h4>Select your fruit and then click the button of "Next Step"</h4>
            <Container className="p-5 text-center">
                <Row>
                    {ListFruits.map((fruit, index) =>  (                     
                        <CardFruit fruit={fruit} key={index} clickCard={clickCard} selectedCard={selectedCard}/>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default FirstStep