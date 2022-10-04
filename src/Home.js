import { useState } from "react";

function Home() {

    const [drinks, setDrinks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [showDetails, setShowDetails] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchQuery)
        .then(r => r.json())
        .then(drinksArray => setDrinks(drinksArray.drinks))
        setSearchQuery("");
    }

    function getRandom(){
      fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(r => r.json())
      .then(d => {
        setDrinks(d.drinks)
        setShowDetails(d.drinks[0])
      })
    }

    function addToFavorites(drinkToAdd){
      fetch('http://localhost:3001/favorites', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(drinkToAdd),
        })
          .then((response) => response.json())
          .then((data) => console.log('Success:', data))
          .catch((error) => console.error('Error:', error));
    }

    return (
      <>
        <main>
          <h2>Search for a drink</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button>Search</button>
          </form>
            <button onClick={getRandom}>Get Random</button>
          <div>
            <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink.strDrink}
                    <button onClick={() => showDetails == drink ? setShowDetails([]) : setShowDetails(drink)}>{showDetails == drink? "Hide Details" : "Details"}</button>
                    <button onClick={() => addToFavorites(drink)}>Add to Favorites</button>
                        {showDetails == drink ? 
                        <div>
                            <p>{drink.strInstructions}</p>
                            <img src={drink.strDrinkThumb} alt=""/>
                            <table>
                              <tr>
                                <td>{drink.strIngredient1}</td>
                                <td>{drink.strMeasure1}</td>
                              </tr>
                              <tr>
                                <td>{drink.strIngredient2}</td>
                                <td>{drink.strMeasure2}</td>
                              </tr>
                              <tr>
                                <td>{drink.strIngredient3}</td>
                                <td>{drink.strMeasure3}</td>
                              </tr>
                              <tr>
                                <td>{drink.strIngredient4}</td>
                                <td>{drink.strMeasure4}</td>
                              </tr>
                              <tr>
                                <td>{drink.strIngredient5}</td>
                                <td>{drink.strMeasure5}</td>
                              </tr>
                              <tr>
                                <td>{drink.strIngredient6}</td>
                                <td>{drink.strMeasure6}</td>
                              </tr>
                              <tr>
                                <td>{drink.strIngredient7}</td>
                                <td>{drink.strMeasure7}</td>
                              </tr>
                            </table>
                        </div> : <></>} 
                    </li>
                    
                ))}
            </ul>
          </div>
        </main>
      </>
    );
  }

  export default Home;