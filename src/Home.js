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
        setShowDetails([])
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
          <div class="flex flex-col md:flex-row items-center justify-start px-8 py-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" class="bg-gray-100 outline-none" placeholder="Drink name or keyword..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            </div>  
            <div class="bg-gray-800 w-72 lg:w-fit py-3 px-5 m-1.5 text-white text-center font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <button>Search</button>
            </div>
            <div class="bg-gray-800 w-72 py-3 lg:w-fit px-5 text-white text-center font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span onClick={getRandom}>Random</span>
            </div>
          </div>
        </form>
        <div class="flex my-5">
            <ul class=" mx-2 mt-2">
                {drinks.map((drink, index) => (
                    <li class="bg-gray-200 border rounded-lg border-gray-800 mb-5 p-1 flex flex-col" key={index}>
                      <div class="font-bold">{drink.strDrink}</div>
                      <div class="cursor-pointer underline hover:bg-white" onClick={() => showDetails == drink ? setShowDetails([]) : setShowDetails(drink)}>{showDetails == drink? "Hide Details" : "Details"}</div>
                      <div class="cursor-pointer underline hover:bg-white" onClick={() => addToFavorites(drink)}>Add to Favorites</div>
                    </li>   
                ))}
            </ul>
            <div class="mr-2 w-2/3">
                <h2 class="text-2xl text-center underline font-bold">{showDetails.strDrink}</h2>
                <img src={showDetails.strDrinkThumb} alt="" class="border border-gray-800 rounded-lg my-2 mx-auto"/>
                <div class="flex flex-col md:flex-row lg:w-3/5 mx-auto">
                <table class="">
                    <tr class="border border-gray-800">
                      <td class="border border-gray-800 empty:hidden">{showDetails.strIngredient1}</td>
                      <td class="empty:hidden">{showDetails.strMeasure1}</td>
                    </tr>
                    <tr class="border border-gray-800">
                      <td class="border border-gray-800 empty:hidden">{showDetails.strIngredient2}</td>
                      <td class="empty:hidden">{showDetails.strMeasure2}</td>
                    </tr>
                    <tr class="border border-gray-800">
                      <td class="border border-gray-800 empty:hidden">{showDetails.strIngredient3}</td>
                      <td class="empty:hidden">{showDetails.strMeasure3}</td>
                    </tr>
                    <tr class="border border-gray-800">
                      <td class="border border-gray-800 empty:hidden">{showDetails.strIngredient4}</td>
                      <td class="empty:hidden">{showDetails.strMeasure4}</td>
                    </tr>
                    <tr class="border border-gray-800">
                      <td class="border border-gray-800 empty:hidden">{showDetails.strIngredient5}</td>
                      <td class="empty:hidden">{showDetails.strMeasure5}</td>
                    </tr>
                    <tr class="border border-gray-800  ">
                      <td class="border border-gray-800 empty:hidden">{showDetails.strIngredient6}</td>
                      <td class="empty:hidden">{showDetails.strMeasure6}</td>
                    </tr>
                    <tr class="border border-gray-800">
                      <td class="border border-gray-800 empty:hidden">{showDetails.strIngredient7}</td>
                      <td class="empty:hidden">{showDetails.strMeasure7}</td>
                    </tr>
                </table>
                <p class="text-justify lg:px-5">{showDetails.strInstructions}</p>
              </div>
            </div>
        </div>
        </main>
      </>
    );
  }

  export default Home;