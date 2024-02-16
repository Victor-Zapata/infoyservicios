import React from 'react'

const MovieDetail = ({ item }) => {

    const posterPath = item.poster_path 
    const getImage = `http://image.tmdb.org/t/p/w500/${posterPath}`

  return (
    <div>
        <h3 style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '300px'}}>{item.original_title}</h3>
        <img style={{width: '300px', height: '500px'}} src={getImage} alt="" />
    </div>
  )
}

export default MovieDetail