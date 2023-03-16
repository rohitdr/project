import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import RecipeContext from '../Context/RecipeContext'
import Loader from './Loader'
import { useNavigate,useLocation } from "react-router-dom";

export default function IndividualRecipe_description() {
  const context = useContext(RecipeContext)
  const {state}=useLocation();
  const {RecipeItemid}=state
  const {CurrentRecipeItem, CurrentRecipeItemid,RecipeBYId,loading} = context
  useEffect(()=>{
  
    RecipeBYId(RecipeItemid)
    },[RecipeItemid])
 
  return (
  <div className='min-vh-100'>
      {loading && <Loader></Loader>  }

   {  CurrentRecipeItem?.recipe && CurrentRecipeItem?.recipe.map((element)=>{
    return <div style={{backgroundColor:" #edf1f5"}} className="pb-4" key={element._id}>
           <div class="container pt-4 " id="product-section" >
           <div className="row">
              <div className="col-md-6">
              <div class="accordion box_decrease_size_animation" id="accordionExample">
           
           <div class="accordion-item">
             <h2 class="accordion-header" id="headingOne">
               <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               DietLabels
               </button>
             </h2>
             <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                 <strong>{element.dietLabels.map((element)=>{ return <span class="badge  bg-dark mx-2" key={element} style={{color:"white"}}>{element}</span>})}
</strong> 
               </div>
             </div>
           </div>
           <div class="accordion-item">
             <h2 class="accordion-header" id="headingTwo">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               healthLabels
               </button>
             </h2>
             <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                 <strong>{element.healthLabels.map((element)=>{ return <span class="badge mx-2  bg-info" key={element} >{element}</span>})}
</strong> 
               </div>
             </div>
           </div>
          
           
           <div class="accordion-item">
             <h2 class="accordion-header" id="headingthired">
               <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethird" aria-expanded="true" aria-controls="collapsethird">
             Cuisine Type
               </button>
             </h2>
             <div id="collapsethird" class="accordion-collapse collapse show" aria-labelledby="headingthird" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                 <strong>{element.cuisineType.map((element)=>{ return <span class="badge bg-success" key={element} >{element}</span>})} 
</strong> 
               </div>
             </div>
           </div>
           <div class="accordion-item">
             <h2 class="accordion-header" id="headingfour">
               <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
          Cautions
               </button>
             </h2>
             <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                 <strong>{element.cautions.map((element)=>{ return <span class="badge mx-2 " style={{backgroundColor:"red"}} key={element} >{element}</span>})}
</strong> 
               </div>
            
           </div>
           
         </div>
           
         </div>
              </div>
            
            
         <div className="col-md-6">
         <ul class="list-group box_decrease_size_animation">
         <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold mb-0">Instructions</div>

    </div>
  
  </li>
              {element?.instruction?.map((element)=>{ return   <li class="list-group-item d-flex justify-content-between align-items-center mb-0" key={element} >{element}</li>})}
              </ul>
              </div>    



            </div>
 


           </div>
          </div>  })} 
    </div>
  )
}
