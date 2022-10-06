import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Favorites from './Favorites';
import './App.css';
import Nav from "./Nav";

function App() {

  return (
    <div class="bg-[url('https://static01.nyt.com/images/2013/12/08/magazine/08wmt/mag-08WMT-t_CA0-superJumbo.jpg')] h-screen overflow-auto bg-no-repeat bg-cover">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
