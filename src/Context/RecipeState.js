import React, { useState } from "react";
import RecipeContext from "./RecipeContext";
export default function RecipeState(props){
    const [recipe, setRecipe] = useState({})
    const [Latest_recipe, setLatest_Recipe] = useState({})
    const [loading,setLoading]=useState(false)
    const [Ingrediant_statepage] = useState([])
    const LatesRecipe=async()=>{
      setLoading(true)
      const response = await fetch('http://localhost:5000/api/recipe/LatestRecipes', {
          method: 'GET',
      
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'
           
          },
         
      
        });
        
      
       let Latest_recipe= await response.json();

        setLatest_Recipe(Latest_recipe)
        setLoading(false)
    }
    const allRecipe=async()=>{
      setLoading(true)
        const response = await fetch('http://localhost:5000/api/recipe/allRecipes', {
            method: 'GET',
        
            headers: {
              'Content-Type': 'application/json',
              'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'
             
            },
           
        
          });
          
        
         let allrecipe= await response.json();
 
          setRecipe(allrecipe)
          setLoading(false)
    }
    const deleteRecipe=async(id)=>{
     
    window.confirm("really want to delete")

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
    <RecipeContext.Provider value={{recipe,allRecipe,deleteRecipe,setLoading,loading,Ingrediant_statepage,LatesRecipe,Latest_recipe}}>
        {props.children}
    </RecipeContext.Provider>
)

}