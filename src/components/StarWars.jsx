import React, { useEffect, useState } from 'react'
import { useStarWars } from '../store'

const StarWars = () => {
  const getCharacters = useStarWars((state) => state.getCharacters)

  useEffect(() => {
    getCharacters()
    setCountPage(1)
  }, [])

  const characters = useStarWars((state) => state.characters)
  const nextPages = useStarWars((state) => state.nextPages)
  const previousPages = useStarWars((state) => state.previousPages)

  const [countPage, setCountPage] = useState(1)

  const handleNextPage = () => {
    if(countPage > 8) return
    getCharacters(nextPages)
    setCountPage(countPage + 1 )
  }

  const handlePreviousPage = () => {
    if(previousPages == null) return
    if(countPage < 1) return
    getCharacters(previousPages)
    setCountPage(countPage - 1 )
  }

  return (
    <>
      <h2>Personajes</h2>
      <button onClick={handlePreviousPage} disabled={!previousPages}>-</button>
      <span>Page {countPage}</span>
      <button onClick={handleNextPage} disabled={!nextPages}>+</button>
      <ul>
        {characters.map((item) => {
          return <li key={item.name}>{item.name}</li>
        })}
      </ul>
    </>
  )
}

export default StarWars
