import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import RecipeContext from '../Context/RecipeContext'
import NoResult from './NoResult'

export default function Profile_Activity() {
    const context = useContext(RecipeContext)
    const [totalLikes,settotalLikes]=useState(0)
    const {getUser,userData,LatestRecipebyid,Latest_recipebyid} = context
    let Navigate = useNavigate();
    useEffect(()=>{
        if(!sessionStorage.getItem("auth-token")){
            Navigate("/login")
                }
                else{
                    getUser() 
     
                    LatestRecipebyid()
                }
      
    
    },[])
    
  return (<>
   <div>
   

  
    <div class="row">
<div class="col-lg-4 mb-4">
           
    <div class="card h-100 border-start-lg border-start-primary box_decrease_size_animation">
        <div class="card-body">
            <div class="small text-muted">Total Recipes</div>
            <div class="h3">{userData?.totalResults}</div>
                    
        </div>
    </div>
</div>
<div class="col-lg-4 mb-4">
           
    <div class="card h-100 border-start-lg border-start-secondary box_decrease_size_animation">
        <div class="card-body">
            <div class="small text-muted">Total Likes Got</div>
            <div class="h3">{userData?.user?.Liked_Recipe?.length}</div>
                   
        </div>
    </div>
</div>
<div class="col-lg-4 mb-4">
           
    <div class="card h-100 border-start-lg border-start-success box_decrease_size_animation">
        <div class="card-body">
            <div class="small text-muted">Total Comments Got</div>
            <div class="h3 d-flex align-items-center">{userData?.user?.Total_Comments}</div>
                   
        </div>
    </div>
</div>
    </div>

    {!Latest_recipebyid ? <NoResult img="https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif" heading="No Result found" paragraph="Whoops.... You had not uploaded any Recipe yet"></NoResult> :    <div class="card card-header-actions mb-4 ">
<div class="card-header">
    Latest Recipes
    
</div>

        <div class="card-body px-0">
       { Latest_recipebyid.recipe && Latest_recipebyid.recipe.map((element)=>{

           return <><div class="d-flex align-items-center justify-content-between px-4">
                <div class="d-flex align-items-center">
                <img src={element.image}
              className="img-fluid shadow-1-strong rounded latest_recipe_image Profile_activity_latest_image " alt="Latest Recipe Image" />
                    <div class="ms-4">
                        <div class="small">{element.label}</div>
                        <div class="text-xs text-muted">{(new Date(element.date).toLocaleString())}</div>
                    </div>
                </div>
                <div class="ms-4 small">
                    <a class="badge bg-light text-dark me-3">Delete</a>
                    <a href="#!">Edit</a>
                </div>
            </div>
            <hr/></>
          
       })}
          
           
          
        </div>
    </div>
}
 
</div>


</>
  )
}
