import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeContext from "./RecipeContext";
export default function RecipeState(props){
  // const [heart,setHeart]=useState("regular")
  const [LikedRecipe,setLikedRecipe]=useState([])
    const [recipe, setRecipe] = useState({})
    const [Latest_recipe, setLatest_Recipe] = useState({})
    const [Latest_recipebyid, setLatest_Recipebyid] = useState({})
    const [loading,setLoading]=useState(false)
    const [userData,setUserData]=useState({})
    const [Ingrediant_statepage] = useState([])
   const [name_to_search,setName_to_search]=useState("")
   const [searchRecipe,setsearchedRecipe]=useState({})
   const[alert, setAlert]=useState(null)
   const [CurrentRecipeItem,setCurrentRecipeItem]=useState({})
   const [CurrentRecipeItemid,setCurrentRecipeItemid]=useState("")
   const [progress, setProgress] = useState(0);
   const [progressheight,setProgressHeight] = useState(2)
  const [signuppage , setsignuppage]=useState(0)
     const [userbyid, setuserbyid]= useState({})
     const [cuisinedata,setcuisinedata]=useState({})
     const [cuisineloading,setcuisineloading]=useState(false)
     const [healthdata , sethealthdata]=useState({})
     const [healthloading,sethealthloading]=useState(false)
     const [mealdata ,setmealdata]=useState({})
     const [dishdata,setdishdata]=useState({})
   const [dietdata,setdietdata]=useState({})

    //api to get recipe who has a particular mealtype
    const diettype=async(type)=>{
    
      setProgress(30)
           const response = await fetch(`http://localhost:5000/api/recipe/allRecipeswithdietLabels/${type}`, {
             method: 'GET',
             mode: "cors",
             headers: {
               'Content-Type': 'application/json',
            
         
              
             },
            
         
         
           });
           setProgress(50)
           let result=await response.json();
           setProgress(70)
         setdietdata(result)
          setProgress(100)
         
         }
   //api to get recipe who has a particular mealtype
   const dishtype=async(type)=>{
    
    setProgress(30)
         const response = await fetch(`http://localhost:5000/api/recipe/allRecipeswithdishtype/${type}`, {
           method: 'GET',
           mode: "cors",
           headers: {
             'Content-Type': 'application/json',
          
       
            
           },
          
       
       
         });
         setProgress(50)
         let result=await response.json();
         setProgress(70)
       setdishdata(result)
        setProgress(100)
       
       }
     //api to get recipe who has a particular mealtype
     const mealtype=async(type)=>{
    
      setProgress(30)
           const response = await fetch(`${(type=="lunch/dinner")?"http://localhost:5000/api/recipe/allRecipeswithmealtypelunchdinner":`http://localhost:5000/api/recipe/allRecipeswithmealtype/${type}`}`, {
             method: 'GET',
             mode: "cors",
             headers: {
               'Content-Type': 'application/json',
            
         
              
             },
            
         
         
           });
           setProgress(50)
           let result=await response.json();
           setProgress(70)
          setmealdata(result)
          setProgress(100)
         
         }
//api to get recipe who has a particular healthlabel
     const health=async(type)=>{
 sethealthloading(true)
 setProgress(30)
      const response = await fetch(`http://localhost:5000/api/recipe/allRecipeswithhealthlabels/${type}`, {
        method: 'GET',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
       
    
         
        },
       
    
    
      });
      setProgress(50)
      let result=await response.json();
      setProgress(70)
     sethealthdata(result)
     setProgress(100)
      sethealthloading(false)
    }
//api to get recipe according to cuisine type
const cuisine=async(type)=>{
setProgress(30)
  const response = await fetch(`http://localhost:5000/api/recipe/allRecipeswithcuisinetype/${type}`, {
    method: 'GET',
    mode: "cors",
    headers: {
      'Content-Type': 'application/json',
   

     
    },
   


  });
  if(response.status==404){
showAlert(response.error,'danger')
setProgress(100)
  }
  else{
    setProgress(50)
    let result=await response.json();
    setProgress(70)
    setcuisinedata(result)
  setProgress(100)
  }

}
     ////api to get user detail by giving id
     const getUserbyid=async(id)=>{
      setLoading(true)
      
      const response = await fetch("http://localhost:5000/api/auth/getUserbyid", {
          method: 'POST',
          mode: "cors",
          headers: {
            'Content-Type': 'application/json',
         
    
           
          },
          body: JSON.stringify({
            "id":id
           })
         
      
        });
      
        
      let userDetail = await response.json()
      setuserbyid(userDetail)
       setLoading(false)
      
    
    }

    ///api to search recipe by id
   const RecipeBYId=async(id)=>{
    setLoading(true)
   
    const response = await fetch(`http://localhost:5000/api/recipe/recipebyid/${id}`, {
      method: 'GET',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        'auth-token':sessionStorage.getItem("auth-token")?sessionStorage.getItem("auth-token"):localStorage.getItem("auth-token")

       
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
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        // 'auth-token':sessionStorage.getItem("auth-token")
        'auth-token':sessionStorage.getItem("auth-token")?sessionStorage.getItem("auth-token"):localStorage.getItem("auth-token")

       
      },
     
     
  
    });
    
    if(response.status==404){
      setLikedRecipe(false)
      setLoading(false)
    }
    else{
      let Liked=  await response.json();
      setLikedRecipe(Liked)
      setLoading(false)
    }
    console.log(LikedRecipe)
   
  }catch(e){
    console.log(e.message)
   
  }

   
}



   //api to get user details
   const getUser=async()=>{
    if(sessionStorage.getItem("auth-token")||localStorage.getItem("auth-token")){
      setLoading(true)
      try{ const response = await fetch("http://localhost:5000/api/auth/getUser", {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          // 'auth-token':sessionStorage.getItem("auth-token")
          'auth-token':sessionStorage.getItem("auth-token")?sessionStorage.getItem("auth-token"):localStorage.getItem("auth-token")
  
         
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
   
    


   }
   
   //api to unlike a recipe
   const UnLikeRecipe=async(recipeid)=>{
    setLoading(true)
    
    const response = await fetch("http://localhost:5000/api/recipe/unlike", {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          // 'auth-token':sessionStorage.getItem("auth-token")
          'auth-token':sessionStorage.getItem("auth-token")?sessionStorage.getItem("auth-token"):localStorage.getItem("auth-token")
  
         
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
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        // 'auth-token':sessionStorage.getItem("auth-token")
        'auth-token':sessionStorage.getItem("auth-token")?sessionStorage.getItem("auth-token"):localStorage.getItem("auth-token")

       
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
            mode: "cors",
            headers: {
              'Content-Type': 'application/json',
              // 'auth-token':sessionStorage.getItem("auth-token")
              'auth-token':sessionStorage.getItem("auth-token")?sessionStorage.getItem("auth-token"):localStorage.getItem("auth-token")
  
             
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
          mode: "cors",
          headers: {
            'Content-Type': 'application/json'
         
           
          }
         
      
        });
        
      
       let Latest_recipe= await response.json();
       
        setLatest_Recipe(Latest_recipe)
     
        setLoading(false)
       
    }
    //api for latest recipe of a parrticular user
    const LatestRecipebyid=async()=>{

    
      setLoading(true)
      const response = await fetch('http://localhost:5000/api/recipe/LatestRecipesbyid', {
          method: 'GET',
          mode: "cors",
          headers: {
            'Content-Type': 'application/json',
            // 'auth-token':sessionStorage.getItem("auth-token")
            'auth-token':sessionStorage.getItem("auth-token")?sessionStorage.getItem("auth-token"):localStorage.getItem("auth-token")
           
          }
         
      
        });
        
        if(response.status==404){
      setLatest_Recipebyid(false)
      setLoading(false)
        }
        else{
          let Latest_recipebyid= await response.json();
       
          setLatest_Recipebyid(Latest_recipebyid)
       
          setLoading(false)
        }
      
       
    }
    // api for all recipes related to a user
    const allRecipe=async()=>{
 
      setLoading(true)
      try{
        const response = await fetch('http://localhost:5000/api/recipe/allRecipes', {
            method: 'GET',
            mode: "cors",
            headers: {
              'Content-Type': 'application/json',
              // 'auth-token':sessionStorage.getItem("auth-token")
              'auth-token':sessionStorage.getItem("auth-token")?sessionStorage.getItem("auth-token"):localStorage.getItem("auth-token")
            }
           
        
          });
          
    
       
if(response.status==404)
{
  setRecipe(false)
  setLoading(false)
}
else{
  let allrecipe= await response.json();
  setRecipe(allrecipe)
         
  setLoading(false)
}
         
        }catch(e){
          console.log(e.message)
         
        }
      
    }
    // api for delete a recipe
    const deleteRecipe=async(id)=>{
      setLoading(true)

    
        const response = await fetch(`http://localhost:5000/api/recipe/deleteRecipe/${id}`, {
            method: 'DELETE',
            mode: "cors",
            headers: {
              'Content-Type': 'application/json',
              // 'auth-token':sessionStorage.getItem("auth-token")
              'auth-token':sessionStorage.getItem("auth-token")?sessionStorage.getItem("auth-token"):localStorage.getItem("auth-token")
             
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
    <RecipeContext.Provider value={{diettype,dietdata,dishdata,dishtype, mealtype,mealdata,health,healthdata,cuisineloading,cuisinedata,cuisine,getUserbyid,userbyid,LatestRecipebyid,Latest_recipebyid,signuppage,setsignuppage,showAlert,setProgressHeight,progressheight,progress,setProgress,RecipeBYId,CurrentRecipeItemid,setCurrentRecipeItemid,CurrentRecipeItem,setCurrentRecipeItem,AllLikedRecipe,LikedRecipe,setLikedRecipe,LikeRecipe,UnLikeRecipe,userData,getUser,recipe,alert,setAlert,allRecipe,deleteRecipe,setLoading,loading,Ingrediant_statepage,LatesRecipe,Latest_recipe,NameRecipe,name_to_search,setName_to_search,searchRecipe,setsearchedRecipe}}>
        {props.children}
    </RecipeContext.Provider>
)

}