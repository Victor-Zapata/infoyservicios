import "./App.css";
import { Route, Routes } from "react-router-dom";
import OfficialsList from "./components/OfficialsList";
import Dolares from "./components/Dolares";

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<OfficialsList />} />
        <Route exact path="/dolares" element={<Dolares />} />
      </Routes>
    </div>
  );
}

export default App;
