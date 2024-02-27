import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{padding: '25px'}}>
      <h1 style={{ margin: '15px 0', color: 'rgb(20, 20, 112)'}}>Info y servicios</h1>

      <div className="grid-container">
        <div className="grid-item">
          <Link to="/dolares" style={{ color: 'white' }}>
            <h2>💵 Cotizaciones</h2>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/funcionarios" style={{ color: 'white', height: '100%' }}>
            <h2>🏢 Funcionarios</h2>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/movies" style={{ color: 'white', height: '100%' }}>
            <h2>🎬 Cine</h2>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/starwars" style={{ color: 'white', height: '100%' }}>
            <h2>⚽ StarWars</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
