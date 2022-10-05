import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Favorites from './Favorites';
import './App.css';
import Nav from "./Nav";

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
