import { useEffect, useState } from 'react'
import axios from 'axios'

const OfficialsList = () => {
  const [list, setList] = useState([])

  const getData = async () => {
    const response = await axios.get('http://localhost:3001/officials')
    const data = response.data
    setList(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ol
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap:'25px',
        listStyle: 'none',
        padding: 0
      }}
      className='official_cards_scene'
    >
      {list.map((item) => {
        return (
          <li key={item.id} className='flip-card'>
            <div className='flip-card-inner'>
            <div className='flip-card-front'>
            <img
              style={{width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover'}}
              src={item.foto}
              alt=""
            />

            </div>
            <div className='flip-card-back'>
            <h3 style={{fontSize: '24px', lineHeight: '1.1', marginTop: '10px'}}>{item.nombre}</h3>
            <p style={{fontSize: '18px'}}>{item.cargo}</p>
            <p>Estado civil: {item.estado_civil}</p>
            <p>Edad: {item.edad}</p>
            </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default OfficialsList
