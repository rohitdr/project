import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import RecipeContext from '../Context/RecipeContext'
import Loader from './Loader'
import { Link, useLocation,useNavigate } from 'react-router-dom';
export default function IndividualRecipe_Ingrediants() {
  const {state}=useLocation();
  const {RecipeItemid}=state
  const context = useContext(RecipeContext)
  const {CurrentRecipeItem,CurrentRecipeItemid,RecipeBYId , loading} = context
  useEffect(()=>{
   
    RecipeBYId(RecipeItemid)
    },[RecipeItemid])
 
  return (
    <div style={{backgroundColor:" #edf1f5"}}>
      <div class="container pt-4 " id="product-section" >
    <div className="row">
    {loading && <Loader></Loader> }

        { !loading && CurrentRecipeItem.recipe && CurrentRecipeItem?.recipe.map((element)=>{
      return element.ingredients.map((ele)=>{
          return  <div className="col-md-6 pb-4" key={element._id} >
           <div class="card mb-3 box_decrease_size_animation" style={{maxWidth: "540px"}}>
     <div class="row g-0">
       <div class="col-md-4">
         <img src={ele.image} class="img-fluid rounded-start" alt="..."/>
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h5 class="card-title">{ele.text}</h5>
           <p class="card-text"><small class="text-muted">{Math.ceil(ele.weight)}g</small></p>
         </div>
       </div>
     </div>
   </div>
        
          
          
       </div>     
        })
   })} 
  
    </div>
    </div></div>
  )
}
