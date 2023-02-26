import React, { useState } from "react";
import RecipeContext from "./RecipeContext";
export default function RecipeState(props){
  // const [heart,setHeart]=useState("regular")
    const [recipe, setRecipe] = useState({})
    const [Latest_recipe, setLatest_Recipe] = useState({})
    const [loading,setLoading]=useState(false)
    const [userData,setUserData]=useState({})
    const [Ingrediant_statepage] = useState([])
   const [name_to_search,setName_to_search]=useState("")
   const [searchRecipe,setsearchedRecipe]=useState({})
   const[alert, setAlert]=useState(null)
   
   const getUser=async()=>{
   
    const response = await fetch("http://localhost:5000/api/auth/getUser", {
      method: 'POST',
 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'

       
      },
     
     
  
    });
   
    let userDetail= await response.json();

      setUserData(userDetail)

   
   }
   
   //api to unlike a recipe
   const UnLikeRecipe=async(recipeid)=>{
 
        
    const response = await fetch("http://localhost:5000/api/recipe/unlike", {
        method: 'POST',
   
        headers: {
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'
  
         
        },
        body: JSON.stringify({
          "id":recipeid
         })
       
    
      });
    
     
     if(response.status!==400){
      let likemessage= await response.json();
      console.log(likemessage)
   
      // showAlert(likemessage,"success")
     
     }
     else{
      console.log(response.json)
     }
    
  
    
  
  }
   //api to like a recipe
const LikeRecipe=async(recipeid)=>{
 
        
  const response = await fetch("http://localhost:5000/api/recipe/like", {
      method: 'POST',
 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'

       
      },
      body: JSON.stringify({
        "id":recipeid
       })
     
  
    });
  
   
   if(response.status!==400){
    let likemessage= await response.json();
    console.log(likemessage)
 
    // showAlert(likemessage,"success")
   
   }
   else{
    console.log(response.json)
   }
  

  

}
//to show alert on top
const showAlert =(msg, type)=>{
  setAlert({
    message : msg,
   type : type,},
   setTimeout(()=>{
      setAlert(null)
   }, 1500))}
   //api for recipe search
    const NameRecipe=async(recipename)=>{
   
        setLoading(true)
        
        const response = await fetch(`http://localhost:5000/api/recipe/allRecipeswith${recipename}`, {
            method: 'GET',
       
            headers: {
              'Content-Type': 'application/json',
              'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'
  
             
            },
          
          
        
          });
         if(response.status!==404){
          let Name_recipe= await response.json();
          setLoading(false)
           setsearchedRecipe(Name_recipe)
         }
         else{
          setLoading(false)
         }
        
       
        
  
    
    }
    //api for latest recipes
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
    // api for all recipes related to a user
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
    // api for delete a recipe
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
    <RecipeContext.Provider value={{LikeRecipe,UnLikeRecipe,userData,getUser,recipe,alert,setAlert,allRecipe,deleteRecipe,setLoading,loading,Ingrediant_statepage,LatesRecipe,Latest_recipe,NameRecipe,name_to_search,setName_to_search,searchRecipe,setsearchedRecipe}}>
        {props.children}
    </RecipeContext.Provider>
)

}