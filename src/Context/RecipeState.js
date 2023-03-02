import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeContext from "./RecipeContext";
export default function RecipeState(props){
  // const [heart,setHeart]=useState("regular")
  const [LikedRecipe,setLikedRecipe]=useState([])
    const [recipe, setRecipe] = useState({})
    const [Latest_recipe, setLatest_Recipe] = useState({})
    const [loading,setLoading]=useState(false)
    const [userData,setUserData]=useState({})
    const [Ingrediant_statepage] = useState([])
   const [name_to_search,setName_to_search]=useState("")
   const [searchRecipe,setsearchedRecipe]=useState({})
   const[alert, setAlert]=useState(null)
   const [CurrentRecipeItem,setCurrentRecipeItem]=useState({})
   const [CurrentRecipeItemid,setCurrentRecipeItemid]=useState("")
   const [progress, setProgress] = useState(0);
   const [progressheight,setProgressHeight] = useState(5)
  const [signuppage , setsignuppage]=useState(0)

   const RecipeBYId=async(id)=>{
    setLoading(true)
   
    const response = await fetch(`http://localhost:5000/api/recipe/recipebyid/${id}`, {
      method: 'GET',
 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':sessionStorage.getItem("auth-token")

       
      },
     
     
  
    });
  
    let current=  await response.json();
 
  setCurrentRecipeItem(current)
  setLoading(false)
 
  
   }
const AllLikedRecipe=async()=>{
  setLoading(true)
  try{
  const response = await fetch("http://localhost:5000/api/recipe/allLikedRecipe", {
      method: 'GET',
 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':sessionStorage.getItem("auth-token")

       
      },
     
     
  
    });
    
    let Liked=  await response.json();
 
  setLikedRecipe(Liked)
  setLoading(false)
  }catch(e){
    console.log(e.message)
   
  }

   
}



   //api to get user details
   const getUser=async()=>{
    setLoading(true)
    
   try{ const response = await fetch("http://localhost:5000/api/auth/getUser", {
      method: 'POST',
 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':sessionStorage.getItem("auth-token")

       
      },
     
     
  
    });
    
    let userDetail= await response.json();
 

      setUserData(userDetail)
      setLoading(false)
  }
catch(e){
 console.log(e.message)
 
}

   }
   
   //api to unlike a recipe
   const UnLikeRecipe=async(recipeid)=>{
    setLoading(true)
    
    const response = await fetch("http://localhost:5000/api/recipe/unlike", {
        method: 'POST',
   
        headers: {
          'Content-Type': 'application/json',
          'auth-token':sessionStorage.getItem("auth-token")
  
         
        },
        body: JSON.stringify({
          "id":recipeid
         })
       
    
      });
    
      
    
     setLoading(false)
    
  
  }
   //api to like a recipe
const LikeRecipe=async(recipeid)=>{
  setLoading(true)
  
        
  const response = await fetch("http://localhost:5000/api/recipe/like", {
      method: 'POST',
 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':sessionStorage.getItem("auth-token")

       
      },
      body: JSON.stringify({
        "id":recipeid
       })
     
  
    });
    
   
 
   
  
   setLoading(false)
  

}
//to show alert on top
const showAlert =(msg, type)=>{
  setAlert({
    message : msg,
   type : type},
   setTimeout(()=>{
      setAlert(null)
   }, 2000))}
   //api for recipe search
    const NameRecipe=async(recipename)=>{
      
        setLoading(true)
        
        const response = await fetch(`http://localhost:5000/api/recipe/allRecipeswith${recipename}`, {
            method: 'GET',
       
            headers: {
              'Content-Type': 'application/json',
              'auth-token':sessionStorage.getItem("auth-token")
  
             
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
            'auth-token':sessionStorage.getItem("auth-token")
           
          },
         
      
        });
        
      
       let Latest_recipe= await response.json();
       
        setLatest_Recipe(Latest_recipe)
     
        setLoading(false)
       
    }
    // api for all recipes related to a user
    const allRecipe=async()=>{
 
      setLoading(true)
      try{
        const response = await fetch('http://localhost:5000/api/recipe/allRecipes', {
            method: 'GET',
        
            headers: {
              'Content-Type': 'application/json',
              'auth-token':sessionStorage.getItem("auth-token")
             
            },
           
        
          });
          
    
         let allrecipe= await response.json();

          setRecipe(allrecipe)
         
          setLoading(false)
        }catch(e){
          console.log(e.message)
         
        }
      
    }
    // api for delete a recipe
    const deleteRecipe=async(id)=>{
      setLoading(true)
    window.confirm("really want to delete")
    
        const response = await fetch(`http://localhost:5000/api/recipe/deleteRecipe/${id}`, {
            method: 'DELETE',
        
            headers: {
              'Content-Type': 'application/json',
              'auth-token':sessionStorage.getItem("auth-token")
             
            },
           
        
          });
          
          const json = await response.json();
          const newRecipe= recipe.filter((element)=>{
          return  element._id!==id
       
          })
       
    setRecipe(newRecipe)
  allRecipe()
  setLoading(false)
     
    }
return(
    <RecipeContext.Provider value={{signuppage,setsignuppage,showAlert,setProgressHeight,progressheight,progress,setProgress,RecipeBYId,CurrentRecipeItemid,setCurrentRecipeItemid,CurrentRecipeItem,setCurrentRecipeItem,AllLikedRecipe,LikedRecipe,setLikedRecipe,LikeRecipe,UnLikeRecipe,userData,getUser,recipe,alert,setAlert,allRecipe,deleteRecipe,setLoading,loading,Ingrediant_statepage,LatesRecipe,Latest_recipe,NameRecipe,name_to_search,setName_to_search,searchRecipe,setsearchedRecipe}}>
        {props.children}
    </RecipeContext.Provider>
)

}