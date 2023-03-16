import React, { useContext, useEffect } from 'react'
import './Individiual_recipe.css'
import { Link, useLocation,useNavigate } from 'react-router-dom';
import RecipeContext from '../Context/RecipeContext';


export default function Individual_Recipe() {
  const context = useContext(RecipeContext)
  const {state} = useLocation();
  const {location}=useLocation();
  const {RecipeItemid}=state
let Navigate=useNavigate();
  const {CurrentRecipeItem,CurrentRecipeItemid,RecipeBYId} = context

  useEffect(()=>{
   
    RecipeBYId(RecipeItemid)
    },[RecipeItemid, CurrentRecipeItemid])


  const star=6;
  return (
<>
    {CurrentRecipeItem.recipe && CurrentRecipeItem.recipe.map((element)=>{
    return <div style={{backgroundColor:" #edf1f5"}} key={element._id}>
     <div class="container pt-4" id="product-section" >
<div class="row">
<div class="col-md-6">
<img
src={element.image}
alt="Kodak Brownie Flash B Camera"
class="image-responsive box_decrease_size_animation"
height="400px"
width="100%"
/>
</div>
<div class="col-md-6">
<div class="col-md-12 ">
<h1 >{element.label}</h1>
</div>
<div className="row">
<div class="col-md-12">
<span class="label label-primary">Uploaded On </span>
<span class="monospaced">{(new Date(element.date).toLocaleString())}</span>
</div> </div><div className="row">
<div class="col-md-12 " >
<p class="description">
Uploaded By Rohit
</p>

</div> 
</div>
<div class="row">
<div class="col-md-3">

 <i className={`fa-${star>0?"solid":"regular"} text-danger fa-star`} ></i>
 <i className={`fa-${star>1?"solid":"regular"} text-danger fa-star`} ></i>
 <i className={`fa-${star>2?"solid":"regular"} text-danger fa-star`} ></i>
 <i className={`fa-${star>3?"solid":"regular"} text-danger fa-star`} ></i>
 <i className={`fa-${star>4?"solid":"regular"} text-danger fa-star`} ></i>
 <span class="label label-success">61</span>
 
</div>
<div class="col-md-3">
<span class="monospaced"><i class="fa-solid text-danger mx-2 fa-heart"></i>{element.Likes}</span>
</div>
<div class="col-md-3">
<span class="monospaced">Write a Review</span>
</div>

</div>
<div class="col-md-12">
<p class="description">
{element.dietLabels.map((element)=>{ return <span class="badge  bg-dark mx-2" style={{color:"white"}} key={element}>{element}</span>})}

</p>
</div> 
<div class="col-md-12">
<p class="description">
{element.cautions.map((element)=>{ return <span class="badge mx-2 " style={{backgroundColor:"red"}} key={element}>{element}</span>})}
</p>
</div> 
<div class="col-md-12">
<p class="description">
{element.healthLabels.map((element)=>{ return <span class="badge mx-2  bg-info" key={element}>{element}</span>})}
</p>
</div> 
<div class="col-md-12">
<p class="description">
{element.cuisineType.map((element)=>{ return <span class="badge bg-success" key={element}>{element}</span>})} {element.mealType.map((element)=>{ return <span class="badge bg-primary" key={element}>{element}</span>})} {element.dishType.map((element)=>{ return <span class="badge bg-warning" key={element}>{element}</span>})}
</p>
</div> 














 

</div>

<div className="row">
<section >
          <div class="container pt-5">
{/* <nav class="nav profile-nav-borders ">
  <Link class={`nav-link   ${window.location?.pathname=="/Individual_description"?"active":""}  `} onClick={()=>{Navigate("/Individual_description",{state:{RecipeItemid:RecipeItemid}})}} >Description</Link>
  <Link class={`nav-link ${window.location?.pathname=='/Individual_Comment'?"active":""} `}  onClick={()=>{Navigate("/Individual_Comment",{state:{RecipeItemid:RecipeItemid}})}}>Comments& Ratings</Link>

  <Link class={`nav-link ${window.location?.pathname=='/Individual_Ingredients'?"active":""} `} onClick={()=>{Navigate("/Individual_Ingredients",{state:{RecipeItemid:RecipeItemid}})}}>Ingredients</Link>
<Link class={`nav-link ${window.location?.pathname=='/Individaul_Nutrients'?"active":""} `}  onClick={()=>{Navigate("/Individaul_Nutrients",{state:{RecipeItemid:RecipeItemid}})}}>Nutrients</Link>
  
</nav> */}

<hr class="mt-0 mb-2"/> 



</div> 


</section>
</div>




</div>
</div>

</div>
    }) }


    </>
  )
}
