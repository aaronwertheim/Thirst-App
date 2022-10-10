import { useEffect, useState } from "react";

function Favorites() {

  const [favorites, setFavorites] = useState([]);
  const [showDetails, setShowDetails] = useState([]);

  useEffect(() => {
    fetch('https://favorite-drinks.herokuapp.com/favorites')
    .then(r => r.json())
    .then(d => setFavorites(d))
  },[])

  function handleDelete(id){
    fetch('https://favorite-drinks.herokuapp.com/favorites' + id, {
      method: 'DELETE'
    }).then(setFavorites(favorites.filter(fav => fav.id !== id)))
    if(showDetails.id === id){
      setShowDetails([])
    }
  }

    return (
      <>
        <main>
          <div class="flex my-5">
            <div  class=" mx-2 mt-2 lg:w-1/5">
              <h2 class="text-2xl font-bold underline mb-4">Favorites</h2>
              {favorites.map(fav => (
                <div class="bg-gray-200 border rounded-lg border-gray-800 mb-5 p-1 flex flex-col shadow-md">
                  <h2 class="font-bold">{fav.strDrink}</h2>
                  <div class="cursor-pointer underline hover:bg-white" onClick={() => showDetails === fav ? setShowDetails([]) : setShowDetails(fav)}>{showDetails === fav? "Hide Details" : "Details"}</div>
                  <div class="cursor-pointer underline hover:bg-white" onClick={() => handleDelete(fav.id)}>Remove from Favorites</div>
                </div>
              ))}
            </div>  
            <div class="mr-2 w-2/3">
              <h2 class="text-2xl text-center underline font-bold">{showDetails.strDrink}</h2>
              <img src={showDetails.strDrinkThumb} alt="" class=" rounded-lg my-5 mx-auto shadow-2xl"/>
              <div class="flex flex-col md:flex-row lg:w-3/5 mx-auto"> 
                <table class="shadow-xl bg-gray-200">
                  <tr class="border border-gray-800">
                    <td class="border border-gray-800 empty:hidden p-1">{showDetails.strIngredient1}</td>
                    <td class="border border-gray-800 empty:hidden p-1">{showDetails.strMeasure1}</td>
                  </tr>
                  <tr class="border border-gray-800">
                    <td class="border border-gray-800 empty:hidden p-1">{showDetails.strIngredient2}</td>
                    <td class="border border-gray-800 empty:hidden p-1">{showDetails.strMeasure2}</td>
                  </tr>
                  <tr class="border border-gray-800">
                    <td class="border border-gray-800 empty:hidden p-1">{showDetails.strIngredient3}</td>
                    <td class="border border-gray-800 empty:hidden p-1">{showDetails.strMeasure3}</td>
                  </tr>
                  <tr class="border border-gray-800">
                    <td class="border border-gray-800 empty:hidden p-1">{showDetails.strIngredient4}</td>
                    <td class="border border-gray-800 empty:hidden p-1">{showDetails.strMeasure4}</td>
                  </tr>
                  <tr class="border border-gray-800">
                    <td class="border border-gray-800 empty:hidden p-1">{showDetails.strIngredient5}</td>
                    <td class="border border-gray-800 empty:hidden p-1">{showDetails.strMeasure5}</td>
                  </tr>
                  <tr class="border border-gray-800">
                    <td class="border border-gray-800 empty:hidden p-1">{showDetails.strIngredient6}</td>
                    <td class="border border-gray-800 empty:hidden p-1">{showDetails.strMeasure6}</td>
                  </tr>
                  <tr class="border border-gray-800">
                    <td class="border border-gray-800 empty:hidden p-1">{showDetails.strIngredient7}</td>
                    <td class="border border-gray-800 empty:hidden p-1">{showDetails.strMeasure7}</td>
                  </tr>
                </table>
                <p class="text-justify font-bold lg:w-2/3 mx-auto my-auto p-2 rounded-sm">{showDetails.strInstructions}</p>
              </div>   
            </div>
          </div>
        </main>
      </>
    );
  }

  export default Favorites;