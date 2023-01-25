import React from 'react'
import RecipeItem from './RecipeItem'

export default function Recipe() {
  return (
    <>
   <div class="container">
  <div class="row">
    <div class="col-md-6 mt-4">
     
    <RecipeItem></RecipeItem>
    </div>
    <div class="col-md-6 mt-4">
     
    <RecipeItem></RecipeItem>
    </div><div class="col-md-6 mt-4">
     
     <RecipeItem></RecipeItem>
     </div><div class="col-md-6 mt-4">
     
     <RecipeItem></RecipeItem>
     </div><div class="col-md-6 mt-4">
     
     <RecipeItem></RecipeItem>
     </div><div class="col-md-6 mt-4">
     
     <RecipeItem></RecipeItem>
     </div>
  </div>
</div>
{/*         
<div class="d-flex justify-content-between">
        <button type="button" class="btn btn-dark" disabled={this.state.page<=1} onClick={this.prev}>previous</button>
        <button type="button" class="btn btn-dark" disabled={this.state.page+1>Math.ceil(this.state.total/20)} onClick={this.next}>Next</button>
        </div>   */}

    

   

    
    </>
  )
}
