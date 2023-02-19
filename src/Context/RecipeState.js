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
    const deleteRecipe=async(id)=>{
        window.confirm("Your Really want to delete the Recipe")
        const response = await fetch(`http://localhost:5000/api/recipe/deleteRecipe/${id}`, {
            method: 'DELETE',
        
            headers: {
              'Content-Type': 'application/json',
              'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'
             
            },
           
        
          });
          const json = await response.json();
          const newRecipe= recipe.filter((element)=>{
          return  element._id!==id
       
          })
    setRecipe(newRecipe)
  allRecipe()
    
    }
return(
    <RecipeContext.Provider value={{recipe,allRecipe,deleteRecipe}}>
        {props.children}
    </RecipeContext.Provider>
)

}