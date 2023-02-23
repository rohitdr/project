import React from 'react'

export default function IngrediantsDetails(props) {
  return (
    <div>
       <div class="modal" id={`exampleModal${props.modal}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Ingrediants Full details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="form-outline">
                  <label className="form-label text-dark fw-bold" for={`ingrediants_text[${props.number}]`}>
             Enter the full details about Ingrediant
                  </label>
                  <input type="text" id={`ingrediants_text[${props.number}]`} className="form-control border-dark" name={`ingrediants_text[${props.number}]`} placeholder="like : 2 cups cranberries, picked over" />
                </div>
    
      <div className="form-outline">
                  <label className="form-label text-dark fw-bold " for={`ingrediants_weight[${props.number}]`}>
          Enter the weight in grams
                  </label>
                  <input type="number" id={`ingrediants_weight[${props.number}]`} name={`ingrediants_weight[${props.number}]`} className="form-control border-dark"/>
                </div>
                <div className="form-outline">
                  <label className="form-label text-dark fw-bold" for={`ingrediants_url[${props.number}]`}>
        Enter image url
                  </label>
                  <input type="url" id="ingrediants_url[first]" name="ingrediants_url[first]" className="form-control border-dark"/>
                </div>
                </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
