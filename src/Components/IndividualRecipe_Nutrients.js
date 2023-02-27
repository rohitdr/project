import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import RecipeContext from '../Context/RecipeContext'
export default function IndividualRecipe_Nutrients() {
  const context = useContext(RecipeContext)
  const {CurrentRecipeItem,CurrentRecipeItemid,RecipeBYId} = context
  useEffect(()=>{
    RecipeBYId(CurrentRecipeItemid)
    },[])
  return (

    <div >
     
 <div style={{backgroundColor:" #edf1f5"}} className="pb-4">
    <div class="container pt-4 " id="product-section" >
         <section class="intro">
  <div class=" h-100" >
    <div class="mask d-flex align-items-center h-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="card shadow-2-strong box_decrease_size_animation" style={{backgroundColor: "#f5f7fa"}} >
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-borderless mb-0">
                    <thead>
                      <tr>
                        <th scope="col">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </th>
                        <th scope="col">Nutrients</th>
                        <th scope="col">Quantity</th>
                       
                        
                      </tr>
                    </thead>
                    <tbody>
                    {CurrentRecipeItem.recipe && CurrentRecipeItem.recipe.map((element)=>{
                   
                        return <><tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.ENERC_KCAL.label}</td>
                        <td>{Math.ceil(element.totalNutrients.ENERC_KCAL.quantity)} {element.totalNutrients.ENERC_KCAL.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.FAT.label}</td>
                        <td>{Math.ceil(element.totalNutrients.FAT.quantity)} {element.totalNutrients.FAT.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.FASAT.label}</td>
                        <td>{Math.ceil(element.totalNutrients.FASAT.quantity)} {element.totalNutrients.FASAT.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.CHOCDF.label}</td>
                        <td>{Math.ceil(element.totalNutrients.CHOCDF.quantity)} {element.totalNutrients.CHOCDF.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.SUGAR.label}</td>
                        <td>{Math.ceil(element.totalNutrients.SUGAR.quantity)} {element.totalNutrients.SUGAR.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.PROCNT.label}</td>
                        <td>{Math.ceil(element.totalNutrients.PROCNT.quantity)} {element.totalNutrients.PROCNT.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.CHOLE.label}</td>
                        <td>{Math.ceil(element.totalNutrients.CHOLE.quantity)} {element.totalNutrients.CHOLE.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.CA.label}</td>
                        <td>{Math.ceil(element.totalNutrients.CA.quantity)} {element.totalNutrients.CA.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.FE.label}</td>
                        <td>{Math.ceil(element.totalNutrients.FE.quantity)} {element.totalNutrients.FE.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.VITA_RAE.label}</td>
                        <td>{Math.ceil(element.totalNutrients.VITA_RAE.quantity)} {element.totalNutrients.VITA_RAE.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.THIA.label}</td>
                        <td>{Math.ceil(element.totalNutrients.THIA.quantity)} {element.totalNutrients.THIA.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.RIBF.label}</td>
                        <td>{Math.ceil(element.totalNutrients.RIBF.quantity)} {element.totalNutrients.RIBF.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.NIA.label}</td>
                        <td>{Math.ceil(element.totalNutrients.NIA.quantity)} {element.totalNutrients.NIA.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.VITB6A.label}</td>
                        <td>{Math.ceil(element.totalNutrients.VITB6A.quantity)} {element.totalNutrients.VITB6A.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.FOLAC.label}</td>
                        <td>{Math.ceil(element.totalNutrients.FOLAC.quantity)} {element.totalNutrients.FOLAC.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.VITB12.label}</td>
                        <td>{Math.ceil(element.totalNutrients.VITB12.quantity)} {element.totalNutrients.VITB12.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.VITD.label}</td>
                        <td>{Math.ceil(element.totalNutrients.VITD.quantity)} {element.totalNutrients.VITD.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.TOCPHA.label}</td>
                        <td>{Math.ceil(element.totalNutrients.TOCPHA.quantity)} {element.totalNutrients.TOCPHA.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                          </div>
                        </th>
                       
                        <td>{element.totalNutrients.WATER.label}</td>
                        <td>{Math.ceil(element.totalNutrients.WATER.quantity)} {element.totalNutrients.WATER.unit}</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm px-3">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      </>
                     
                     
                  
                    }
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>   </div>
  </div>
  )
}
