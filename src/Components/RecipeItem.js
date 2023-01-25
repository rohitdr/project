import React from 'react'
import Button from './Button'

export default function RecipeItem() {
  return (
   <>
   <div className="card">
   <div class="d-flex bd-highlight">
  <div class="p-2 flex-fill bd-highlight" style={{width: "50%"}}>
  <img height="300px" width="500px"src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcake%2F&psig=AOvVaw1B1ua8ry3Or1Smup6zd4kJ&ust=1674717323140000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPj58aqW4vwCFQAAAAAdAAAAABAE" className="card-img-top" alt="pexels-brent-keane-1702373.jpg"/>

  </div>
  <div class="p-2 flex-fill bd-highlight " style={{width: "50%"}}><h3 class="text-center">Basic Dry Cure</h3>
    <p className="card-text ">"Low Potassium",
"Kidney-Friendly",
"Vegan",
"Vegetarian",
"Pescatarian",
"Dairy-Free",
"Gluten-Free",
"Wheat-Free",
"Egg-Free",
"Peanut-Free",
"Tree-Nut-Free",
"Soy-Free",
"Fish-Free",
"Shellfish-Free",
"Pork-Free",
"Red-Meat-Free",
</p>
   </div>

</div> 
<hr class="hr" />
  <div className="card-body " style={{backgroundColor:"rgb(63 52 81 / 15%)"}}>
  <div class="d-flex bd-highlight">
  <div class="p-2 flex-fill bd-highlight"  style={{width: "50%"}}>

    
    <h3 class="text-center">25 servers</h3>
    <h1 class="text-center">235 kcal</h1>
  <table class=" table table-borderless table-striped table-hover my-4">
 
  <tbody>
    <tr>

      <td>Mark</td>
      <td>Otto</td>
  
    </tr>
    <tr>
     
      <td>Jacob</td>
      <td>Thornton</td>
    
    </tr>
    <tr>
    <td>Jacob</td>
      <td>Thornton</td>
     
    </tr>
  </tbody>
</table>
<Button type="primary" label="Read More"></Button>
  </div>
  <div class="p-2 flex-fill bd-highlight"><h5 className="card-title"></h5>
  <table class=" table table-borderless table-striped table-hover">
 
 <tbody>
   <tr>

     <td>Mark</td>
     <td>Otto</td>
     
   </tr>
   <tr>
    
     <td>Jacob</td>
     <td>Thornton</td>
    
   </tr>
   <tr>
   <td>Jacob</td>
     <td>Thornton</td>
   
   </tr>
   <tr>
   <td>Jacob</td>
     <td>Thornton</td>
   
   </tr>
   <tr>
   <td>Jacob</td>
     <td>Thornton</td>
   
   </tr>
   <tr>
   <td>Jacob</td>
     <td>Thornton</td>
   
   </tr>
   <tr>
   <td>Jacob</td>
     <td>Thornton</td>
   
   </tr>
 </tbody>
</table>
</div> 
</div> 
</div> 
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
   
   
   </>
  )
}
