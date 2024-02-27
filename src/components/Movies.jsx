import React, { useEffect } from 'react'
import { useMoviesStore } from '../store'
import MovieDetail from './MovieDetail'

const Movies = () => {
  const getMovies = useMoviesStore((state) => state.getMovies)

  useEffect(() => {
    getMovies()
  }, [])

  const movies = useMoviesStore((state) => state.movies)
  console.log(movies)

  return (
    <div style={{margin: '2rem auto'}}>
      <h2>Películas Populares</h2>
      <ol style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {movies.map((item) => {
          return (
            <div key={item.id}>
              <MovieDetail item={item} />
            </div>
          )
        })}
      </ol>
    </div>
  )
}

export default Movies
