import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favorites() {

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/favorites')
    .then(r => r.json())
    .then(d => setFavorites(d))
  },[])

    return (
      <>
        <main>
          <h2>Favorites</h2>
          {favorites.map(fav => (
            <div>
              {fav.strDrink}
            </div>
          ))}
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }

  export default Favorites;