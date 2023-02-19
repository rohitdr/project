import React from "react";

export default function BlankRecipeItem(){
    return(
        <>
        <div className="container my-3">
<form class="bg-white">
<div className="form-row">
    <div className="form-group col-5">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" placeholder="Enter title"/>
   
    </div>
    <div className="form-row">
    <div className="form-group col-md-7">
    <label for="Health_labels">Health Labels</label>
    <input type="text" class="form-control" id="Health_labels" placeholder="Enter Health Labels"/>
    </div> </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-7">
    <label for="Source">Source</label>
    <input type="text" class="form-control" id="Source" placeholder="Enter Source"/>
    </div> </div>
    <div className="form-row">
    <div className="form-group col-md-7">
    <label for="Source">Source</label>
    <input type="text" class="form-control" id="Source" placeholder="Enter Source"/>
    </div> </div>


  <button type="submit" class="btn btn-primary">Submit</button>
</form></div>
        </>
    )
}
