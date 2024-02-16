import "./App.css";
import { Route, Routes } from "react-router-dom";
import OfficialsList from "./components/OfficialsList";
import Dolares from "./components/Dolares";
import Movies from "./components/Movies";
import Home from "./components/Home";

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/funcionarios" element={<OfficialsList />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dolares" element={<Dolares />} />
        <Route exact path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
