import React, { useContext } from 'react'
import RecipeContext from '../../Context/RecipeContext'

export default function IngrediantsDetails(props) {
  const context = useContext(RecipeContext)
  const {Ingrediant_statepage} = context

  var Ingrediants=[]
  const setting_Ingredients=()=>{
  Ingrediants[number]=[
    {
      text: ingrediants_text,
   
      weight: ingrediants_weight,
      
      image: ingrediants_url
      }
    ]
     
     
    
      
    Ingrediant_statepage.push(Ingrediants[number])
   
    console.log(Ingrediant_statepage)
  
    // console.log(Ingrediants[number] )
    // console.log(number)
  }
  const number = props.number;
  var ingrediants_text = []
  var ingrediants_weight = []
  var ingrediants_url = []

  const onchange_text=(e)=>{
 ingrediants_text[number]= e.target.value

  }
  const onchange_weight=(e)=>{
    ingrediants_weight[number]= e.target.value
   
     }
     
     
     const onchange_url=(e)=>{
      ingrediants_url[number]= e.target.value
    
       }
  return (
    <div>
       <div className="modal" id={`exampleModal${props.modal}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Ingrediants Full details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="form-outline">
                  <label className="form-label text-dark fw-bold" for={`ingrediants_text[${props.number}]`}>
             Enter the full details about Ingrediant
                  </label>
                  <input type="text" id={`ingrediants_text[${props.number}]`} className="form-control border-dark" onChange={onchange_text} name={`ingrediants_text[${props.number}]`} placeholder="like : 2 cups cranberries, picked over" />
                </div>
    
      <div className="form-outline">
                  <label className="form-label text-dark fw-bold " for={`ingrediants_weight[${props.number}]`}>
          Enter the weight in grams
                  </label>
                  <input type="number" id={`ingrediants_weight[${props.number}]`} onChange={onchange_weight} name={`ingrediants_weight[${props.number}]`} className="form-control border-dark"/>
                </div>
                <div className="form-outline">
                  <label className="form-label text-dark fw-bold" for={`ingrediants_url[${props.number}]`}>
        Enter image url
                  </label>
                  <input type="url" id="ingrediants_url[first]" onChange={onchange_url} name="ingrediants_url[first]" className="form-control border-dark"/>
                </div>
                </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={setting_Ingredients}  data-bs-dismiss="modal">Add</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
