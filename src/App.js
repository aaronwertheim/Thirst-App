import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Favorites from './Favorites';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Welcome to my drink app!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
