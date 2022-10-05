import { useEffect, useState } from "react";

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

    function getRandom(e){
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
        <form onSubmit={handleSubmit}>
          <div class="flex items-center p-6 space-x-6 overflow-x-auto bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" class="bg-gray-100 outline-none" placeholder="Drink name or keyword..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            </div>  
            <div class="bg-gray-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <button>Search</button>
            </div>
            <div class="bg-gray-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span onClick={getRandom}>Random</span>
            </div>
          </div>
        </form>
            
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