import React, { useState } from "react";
import RecipeContext from "./RecipeContext";
export default function RecipeState(props){
    const [recipe, setRecipe] = useState({})
    const allRecipe=async()=>{
        const response = await fetch('http://localhost:5000/api/recipe/allRecipes', {
            method: 'GET',
        
            headers: {
              'Content-Type': 'application/json',
              'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'
             
            },
           
        
          });
          
        
         let allrecipe= await response.json();
 
          setRecipe(allrecipe)
          
    }
return(
    <RecipeContext.Provider value={{recipe,allRecipe}}>
        {props.children}
    </RecipeContext.Provider>
)

}