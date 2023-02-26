import React from 'react'

export default function AddRecipe() {
  return (
   <>
   <div className="AddRecipe pt-2">
    <div className="container bg-white pt-2 ">
        <div className="row">
            <div className="col-md-8">
            <div className="form-floating">
               
                    <input
                      type="text"
                      id="label"
                      name="label"
                      placeholder="Enter the title"
                      className="form-control border-dark"
                    //   onChange={onchangelabel}
                    />
                     <label for="label">Title</label>

  </div>
  <div className="input-group mt-2">
  
  <input
                    type="file"
                    className="fileToUpload mx-auto hidden form-control "
                    id="imgInp"
                    name="image"
                    // onChange={loadFile}
                  
                  /> 
  <span className="input-group-text">Recipe Image</span>
</div>
                  <div className="row mt-2">
                    <div className="col-4">
                    <input
                        type="text"
                        name="account[first_Ingrediant]"
                        className="form-control border-dark mt-1"
                        placeholder="Enter the first Ingrediant"
                        data-bs-toggle="modal" data-bs-target="#exampleModal1"
                      />
                    </div>
                    <div className="col-3">
                    <input
                        type="text"
                        name="account[Second_ingrediant]"
                        className="form-control mt-1 border-dark"
                        placeholder="Enter the Second Ingrediant"
                        data-bs-toggle="modal" data-bs-target="#exampleModal2"
                      />

                        </div>
                        <div className="col-4">
                        <input
                        type="text"
                        name="account[third_Ingrediant]"
                        className="form-control mt-1 border-dark"
                        placeholder="Enter the third Ingrediant"
                        data-bs-toggle="modal" data-bs-target="#exampleModal3"
                      />
                        </div>
                        <div className="col-1">
                        <div
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Add More Ingrediants"
                        className='mt-1'
                      >
                        <i
                          className=" fs-4 fa-solid  fa-circle-plus text-dark mt-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        ></i>
                      </div>
                        </div>
                  </div>
                   
                     
                    
                      {/* */}
                  
                  
                  
                  <div className="row">
                   <div className="col-sm-7">
                    <div className="input-group mt-2">
                    <span className="input-group-text">Caution</span>
                    <input
                          type="text"
                         
                          placeholder="Enter the caution"
                          className="form-control "
                          name="cautions"
                          id="cautions"
                        // onChange={onchange}
                        />
                        </div>

                    </div>
                    <div className="row">
                    <div className="col-sm-7">
                    <div className="input-group mt-2">
                    <span className="input-group-text">Source</span>

                    <input
                          type="text"
                          id="source"
                          placeholder="Enter the source"
                          className="form-control "
                          name="source"
                        //   onChange={onchange}

                        />
                    </div>    </div>
                        </div>
                  </div>
                  
                  
                   </div>
            <div className="col-md-4">
           
                  <img id="output" height="200px" width="300px" />
              
            </div>
        </div>
  
  
   </div>
   </div>
   </>
  )
}
