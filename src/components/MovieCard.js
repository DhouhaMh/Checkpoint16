import React from 'react'

import {Card} from 'react-bootstrap'
import '../App.css'
import Rating from './Rating'


const MovieCard = ({film}) => {
    
    return (
        <div>
            <Card style={{ width: '18rem' }} className='cardStyle'>
                <Card.Img variant="top" src={film.posterURL} alt={film.posterURL} className='img'/>
                <Card.Body>

                    <Card.Title style={{color:'lightcoral'}}>{film.title}</Card.Title>
                    <Card.Text className="descrip">{film.description}</Card.Text>
                    <Rating rate={film.rating} />
                    
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
