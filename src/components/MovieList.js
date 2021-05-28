import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies, name, ratingSearch}) => {

    
    return (
        <div className="allCards">
            {movies.filter(el=> el.title.toLowerCase().includes(name.toLowerCase().trim()) && el.rating >= ratingSearch).map(film=> <MovieCard film={film}/>)}
        </div>
    )
}

export default MovieList
