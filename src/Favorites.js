import { useEffect, useState } from "react";

function Favorites() {

  const [favorites, setFavorites] = useState([])
  const [showDetails, setShowDetails] = useState([]);

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
              <button onClick={() => showDetails === fav ? setShowDetails([]) : setShowDetails(fav)}>{showDetails === fav? "Hide Details" : "Details"}</button>
              {showDetails === fav ? 
                        <div>
                            <p>{fav.strInstructions}</p>
                            <img src={fav.strDrinkThumb} alt=""/>
                            <table>
                              <tr>
                                <td>{fav.strIngredient1}</td>
                                <td>{fav.strMeasure1}</td>
                              </tr>
                              <tr>
                                <td>{fav.strIngredient2}</td>
                                <td>{fav.strMeasure2}</td>
                              </tr>
                              <tr>
                                <td>{fav.strIngredient3}</td>
                                <td>{fav.strMeasure3}</td>
                              </tr>
                              <tr>
                                <td>{fav.strIngredient4}</td>
                                <td>{fav.strMeasure4}</td>
                              </tr>
                              <tr>
                                <td>{fav.strIngredient5}</td>
                                <td>{fav.strMeasure5}</td>
                              </tr>
                              <tr>
                                <td>{fav.strIngredient6}</td>
                                <td>{fav.strMeasure6}</td>
                              </tr>
                              <tr>
                                <td>{fav.strIngredient7}</td>
                                <td>{fav.strMeasure7}</td>
                              </tr>
                            </table>
                        </div> : <></>} 
            </div>
            
            
          ))}
        </main>
      </>
    );
  }

  export default Favorites;