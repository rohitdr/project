import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import RecipeContext from "../Context/RecipeContext";
import IngrediantsDetails from "./Modals/IngrediantsDetails";

export default function BlankRecipeItem() {


  return (
    <>
  <div className="col-md-3">
       
       
<div className="scene ">
  <div className="recipecard  card border-success "  style={{Width: "18rem"}} aria-hidden="true">
  
 
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>

</div>
</div>
        
        
        
        
  
   
       

  </div>
</div>
    </>
  );
}
