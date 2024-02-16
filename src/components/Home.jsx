import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 style={{ margin: '10px 0' }}>Info y servicios</h1>

      <div className="grid-container">
        <div className="grid-item">
          <Link to="/dolares" style={{ color: 'white' }}>
            <h2>Cotizaciones</h2>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/funcionarios" style={{ color: 'white', height: '100%' }}>
            <h2>Funcionarios</h2>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/movies" style={{ color: 'white', height: '100%' }}>
            <h2>Cine</h2>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/deportes" style={{ color: 'white', height: '100%' }}>
            <h2>Deportes</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
