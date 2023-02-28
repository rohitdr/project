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


  //  api for login
  const login=async(logindetail)=>{
    setLoading(true)
    setProgress(30)
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'

       
      },
      body: JSON.stringify(logindetail)
     
  
    });
    setProgress(50)
    let loginresult= await response.json();
    if(login.succcess == "true"){
      sessionStorage.setItem("auth-token",loginresult.auth_token)
      sessionStorage.setItem("success",loginresult.succcess)
      console.log(loginresult)
      console.log(sessionStorage.getItem("auth-token"))
    

    }
    if(login.succcess==="false"){
     window.alert(loginresult.error)
    }
   
    setProgress(70)

  setLoading(false)
  setProgress(100)
  }
   const RecipeBYId=async(id)=>{
    setLoading(true)
    setProgress(30)
    const response = await fetch(`http://localhost:5000/api/recipe/recipebyid/${id}`, {
      method: 'GET',
 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'

       
      },
     
     
  
    });
    setProgress(50)
    let current=  await response.json();
    setProgress(70)
  setCurrentRecipeItem(current)
  setLoading(false)
  setProgress(100)
  
   }
const AllLikedRecipe=async()=>{
  setLoading(true)
  setProgress(30)
  const response = await fetch("http://localhost:5000/api/recipe/allLikedRecipe", {
      method: 'GET',
 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'

       
      },
     
     
  
    });
    setProgress(50)
    let Liked=  await response.json();
    setProgress(70)
  setLikedRecipe(Liked)
  setLoading(false)
  setProgress(100)

   
}



   //api to get user details
   const getUser=async()=>{
    setLoading(true)
    setProgress(30)
    const response = await fetch("http://localhost:5000/api/auth/getUser", {
      method: 'POST',
 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'

       
      },
     
     
  
    });
    setProgress(50)
    let userDetail= await response.json();
    setProgress(70)

      setUserData(userDetail)
      setLoading(false)
      setProgress(100)
   
   }
   
   //api to unlike a recipe
   const UnLikeRecipe=async(recipeid)=>{
    setLoading(true)
    setProgress(30)
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
    
      setProgress(50)
     if(response.status!==400){
      let likemessage= await response.json();
      setProgress(70)
      console.log(likemessage)
   
      // showAlert(likemessage,"success")
     
     }
     else{
      console.log(response.json)
     }
     setProgress(100)
     setLoading(false)
    
  
  }
   //api to like a recipe
const LikeRecipe=async(recipeid)=>{
  setLoading(true)
  setProgress(30)
        
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
    setProgress(50)
   
   if(response.status!==400){
    let likemessage= await response.json();
    console.log(likemessage)
    setProgress(70)
    // showAlert(likemessage,"success")
   
   }
   else{
    console.log(response.json)
   }
  
   setLoading(false)
   setProgress(100)

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
      setProgress(30)
        setLoading(true)
        
        const response = await fetch(`http://localhost:5000/api/recipe/allRecipeswith${recipename}`, {
            method: 'GET',
       
            headers: {
              'Content-Type': 'application/json',
              'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'
  
             
            },
          
          
        
          });
          setProgress(50)
         if(response.status!==404){
          let Name_recipe= await response.json();
          setLoading(false)
          setProgress(70)
           setsearchedRecipe(Name_recipe)
         }
         else{
          setLoading(false)
         }
        
       
         setProgress(100)
  
    
    }
    //api for latest recipes
    const LatesRecipe=async()=>{

      setProgress(10)
      setLoading(true)
      const response = await fetch('http://localhost:5000/api/recipe/LatestRecipes', {
          method: 'GET',
      
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'
           
          },
         
      
        });
        setProgress(30)
      
       let Latest_recipe= await response.json();
       setProgress(50)
        setLatest_Recipe(Latest_recipe)
        setProgress(75)
        setLoading(false)
        setProgress(100)
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
      setLoading(true)
    window.confirm("really want to delete")
    setProgress(30)
        const response = await fetch(`http://localhost:5000/api/recipe/deleteRecipe/${id}`, {
            method: 'DELETE',
        
            headers: {
              'Content-Type': 'application/json',
              'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTBjNWZjNDU2NTU0NjVhZjIwNWE3MyIsImlhdCI6MTY3NTc5MzA3OH0.TWkQV83QHd1HGrVf5gr7jKFUXLwDjf9bqq6TjJWNLU4'
             
            },
           
        
          });
          setProgress(50)
          const json = await response.json();
          const newRecipe= recipe.filter((element)=>{
          return  element._id!==id
       
          })
          setProgress(70)
    setRecipe(newRecipe)
  allRecipe()
  setLoading(false)
      setProgress(100)
    }
return(
    <RecipeContext.Provider value={{login,setProgressHeight,progressheight,progress,setProgress,RecipeBYId,CurrentRecipeItemid,setCurrentRecipeItemid,CurrentRecipeItem,setCurrentRecipeItem,AllLikedRecipe,LikedRecipe,setLikedRecipe,LikeRecipe,UnLikeRecipe,userData,getUser,recipe,alert,setAlert,allRecipe,deleteRecipe,setLoading,loading,Ingrediant_statepage,LatesRecipe,Latest_recipe,NameRecipe,name_to_search,setName_to_search,searchRecipe,setsearchedRecipe}}>
        {props.children}
    </RecipeContext.Provider>
)

}