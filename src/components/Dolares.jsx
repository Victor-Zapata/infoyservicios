import { useEffect } from 'react'
import { useDolaresStore } from '../store'

const Dolares = () => {
  const getDolares = useDolaresStore((state) => state.getDolares)

  useEffect(() => {
    getDolares()
  }, [])

  const dolares = useDolaresStore((state) => state.dolares)
  console.log(dolares)

  return (
    <ul className="dolares-container">
      {dolares.map((item) => {
        return (
          <li
            key={item.venta}
            style={{ display: 'flex', gap: '1rem' }}
            className="dolar-item"
          >
            <h3>Dólar {item.nombre}</h3>
            <div style={{display: 'flex', gap: '25px'}}>
              <div>
                <h4>${item.compra}</h4>
                <span>Compra</span>
              </div>
              <div>
                <h4>${item.venta}</h4>
                <span>Venta</span>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Dolares
