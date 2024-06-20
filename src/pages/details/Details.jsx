import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/context';

function Details() {
    const param = useParams(); // param is not destructured
    const { recipeDetailsData, setRecipeDetailsData , favoritesList , setFavoritesList} = useContext(GlobalContext)

    async function getRecipeDetails() {
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${param.param}`)
            const data = await response.json();
            setRecipeDetailsData(data.data.recipe)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRecipeDetails();
    }, []) // Dependency array is empty means it will run only once when the component is mounted.

    const recipe = recipeDetailsData;

    
    // Ensure recipeDetailsData is not null before accessing its properties
    if (!recipe || !recipe.image_url) {
        return <div>Loading...</div>;
    }

    // adding to favorite list
    function addToFav(getCurrentItem){
        console.log(getCurrentItem);
        let copyFavList = [...favoritesList];
        const index  = copyFavList.findIndex(item => item.id === getCurrentItem.id) //matlab ki jispe abhi click hua hai kahi  woh phle se toh exist nhi karta

        if(index === -1){ //index === -1 means if the item is not present 
            copyFavList.push(getCurrentItem); //then push it
        }else{
            copyFavList.splice(index) //
        }

        setFavoritesList(copyFavList);
    }

    console.log(favoritesList , "add to fav");
    return (
        <div className="container mx-auto p-5 flex">
            <div className="w-1/2 p-5">
                <img src={recipe.image_url} alt={recipe.title} className="object-cover w-full h-full rounded-lg" />
            </div>
            <div className="w-1/2 p-5">
                <h1 className="text-xl font-semibold mb-4">{recipe.title.substring(0,40)}</h1>
                <button onClick={() => addToFav(recipe)} className='bg-gray-800 mb-6 text-white text-[12px] px-[21px] py-[9px] rounded-[9px]'>
                    {
                        favoritesList.findIndex(item => item.id === param.param) !== -1 ? "REMOVE FROM FAVORITES" : "ADD TO FAVORITES"
                    }
                </button>
                <p className="text-gray-700 mt-2 mb-2 text-[15px]"><strong>Publisher:</strong> {recipe.publisher}</p>
                <p className="text-gray-700 mb-2 text-[15px]"><strong>Cooking Time:</strong> {recipe.cooking_time} minutes</p>
                <p className="text-gray-700 mb-2 text-[15px]"><strong>Servings:</strong> {recipe.servings}</p>
                {/* <p className="text-gray-700 mb-2 text-[15px]"><strong>Source:</strong> <a href={recipe.source_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">View Recipe</a></p> */}
                <h2 className="font-semibold mt-2 text-[15px]">Ingredients:</h2>
                <ul className="list-disc list-inside">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-700 text-[15px]">{ingredient.quantity} {ingredient.unit} {ingredient.description}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Details;
