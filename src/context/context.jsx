import React, { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
   
    const [searchParams , setSearchParams] = useState('')
    const [loading , setLoading] = useState(false);
    const [recipeList , setRecipeList] = useState([]);
    const [recipeDetailsData , setRecipeDetailsData] = useState(null)
    const [favoritesList , setFavoritesList] = useState([])

    async function handleSubmit(e){
        e.preventDefault()
        try{
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`)

            const data = await res.json();//it is important to get the data -- it converts the raw response into the json format
            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes);
                setLoading(false);
                setSearchParams('');
            }
            // console.log(data);
        }catch(error){
            console.log(error);
            setLoading(false);//setLoading() function ko jab bhi kis function k baad me call karenge tab false kar skte hai -so that for the next it can work
            setSearchParams('');
        }
    }

    console.log(recipeList);

    return (
        <GlobalContext.Provider value={{searchParams , loading , recipeList , setSearchParams , handleSubmit , recipeDetailsData , setRecipeDetailsData , favoritesList , setFavoritesList}}>
            {children}
        </GlobalContext.Provider>
    );
}
