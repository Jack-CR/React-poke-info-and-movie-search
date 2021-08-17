import React from 'react'
import {Card,Button} from 'react-bootstrap'

export const CardMovieComponent = ({movie}) => {
    return (
        <Card style={{ width: '18rem' }} bg="light" className="mt-3">
            {movie.show.image===null || undefined
                ?<Card.Img variant="top" src={""} />
                :<Card.Img variant="top" src={movie.show.image.medium} />
            }
             
        <Card.Body>
          <Card.Title>{movie.show.name}</Card.Title>
          <h3>{movie.rating}</h3>
          <Card.Text>
           
          </Card.Text>
          <Button variant="primary" href={`/pokemon/${movie.id}`}>{movie.name} Info</Button>
        </Card.Body>
      </Card>
    )
}

export default CardMovieComponent