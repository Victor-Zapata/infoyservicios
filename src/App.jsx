import "./App.css";
import { Route, Routes } from "react-router-dom";
import OfficialsList from "./components/OfficialsList";
import Dolares from "./components/Dolares";
import Movies from "./components/Movies";

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<OfficialsList />} />
        <Route exact path="/dolares" element={<Dolares />} />
        <Route exact path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
