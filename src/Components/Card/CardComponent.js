import React from 'react'
import {Card,Button} from 'react-bootstrap'

export const CardComponent = ({pokemon}) => {
    return (
        <Card style={{ width: '18rem' }} bg="light" className="mt-3">
        <Card.Img variant="top" src={pokemon.avatar} />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text>
           
          </Card.Text>
         <h1>info poke</h1>
        </Card.Body>
      </Card>
    )
}

export default CardComponent