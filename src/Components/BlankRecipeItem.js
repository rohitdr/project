import React, { useState } from "react";
// import IngrediantsDetails from "./Modals/IngrediantsDetails";

export default function BlankRecipeItem() {
  let arr =[""];
  const getselectedElement=(name)=>{
    var options = document.getElementById(`${name}`).selectedOptions;
    var Values = Array.from(options).map(({ value }) => value);
    return Values;
  }

  const [recipe, setRecipe]=useState({
    label:"",
    image:"",
    
    source: "",
    url: "",
    
    dietLabels: [],
    healthLabels: [],
    cautions: [],
    ingredientLines: [],
    // "ingredients": [
    // {
    // "text": "2 cups cranberries, picked over",
    // "quantity": 2,
    // "measure": "cup",
    // "food": "cranberries",
    // "weight": 220,
    // "foodCategory": "fruit",
    // "foodId": "food_at0yaana2e4sguapnr728bkczyk9",
    // "image": "https://www.edamam.com/food-img/945/94511bef5e26f15bb6eac8e950ac79a9.jpg"
    // },
    // {
    // "text": "2 cups water",
    // "quantity": 2,
    // "measure": "cup",
    // "food": "water",
    // "weight": 474,
    // "foodCategory": "water",
    // "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
    // "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
    // },
    // {
    // "text": "2 cups sugar (see head notes)",
    // "quantity": 2,
    // "measure": "cup",
    // "food": "sugar",
    // "weight": 400,
    // "foodCategory": "sugars",
    // "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
    // "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
    // }
    // ],
    calories: 0,
    totalWeight:0,
    totalTime: 0,
    cuisineType: [
    ],
    mealType: [
   
    ],
    dishType: [
  
    ],
    totalNutrients: {
    ENERC_KCAL: {
    label: "Energy",
    quantity: 0,
    unit: "kcal"
    },
    FAT: {
    label: "Fat",
    quantity: 0,
    unit: "g"
    },
    CHOCDF: {
    label: "Carbs",
    quantity: 0,
    unit: "g"
    },
  
    FIBTG: {
    label: "Fiber",
    quantity:0,
    unit: "g"
    },
    SUGAR: {
    label: "Sugars",
    quantity: 0,
    unit: "g"
    },
   
    PROCNT: {
    label: "Protein",
    quantity: 0,
    unit: "g"
    },
    CHOLE: {
    label: "Cholesterol",
    quantity: 0,
    unit: "mg"
    },
   
    CA: {
    label: "Calcium",
    quantity: 0,
    unit: "mg"
    },
   
   
    FE: {
    label: "Iron",
    quantity: 0,
    unit: "mg"
    },
   
    
    VITA_RAE: {
    label: "Vitamin A",
    quantity: 0,
    unit: "µg"
    },
    VITC: {
    label: "Vitamin C",
    quantity:0,
    unit: "mg"
    },
    THIA: {
    label: "Thiamin (B1)",
    quantity: 0,
    unit: "mg"
    },
    RIBF: {
    label: "Riboflavin (B2)",
    quantity: 0,
    unit: "mg"
    },
    NIA: {
    label: "Niacin (B3)",
    quantity: 0,
    unit: "mg"
    },
    VITB6A: {
    label: "Vitamin B6",
    quantity: 0,
    unit: "mg"
    },
    
   
   
    VITB12: {
    label: "Vitamin B12",
    quantity: 0,
    unit: "µg"
    },
    VITD: {
    label: "Vitamin D",
    quantity: 0,
    unit: "µg"
    },
    TOCPHA: {
    label: "Vitamin E",
    quantity: 0,
    unit: "mg"
    },
    VITK1: {
    label: "Vitamin K",
    quantity: 0,
    unit: "µg"
    },
   
    WATER: {
    label: "Water",
    quantity: 0,
    unit: "g"
    }}
  }
    )
 
  const RecipeAdder=()=>{
    console.log("adding")
  }
  const loadFile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
      onchangeimage(event)
    };
  }
  const onchangelabel=(e)=>{
     setRecipe({...recipe, label : e.target.value})
   
  }
  const onchangeimage=(e)=>{
    setRecipe({...recipe, image : e.target.value})
  }
  const onchange=(e)=>{
    setRecipe({...recipe, [e.target.name] : e.target.value})
  
  }
 
  const onchangearray=(e)=>{
 let Values=getselectedElement(e.target.name)
    setRecipe({...recipe, [e.target.name] : Values})

  }
  var ENERC_KCAL_value,FAT_value,CHOCDF_value,FIBTG_value,SUGAR_value,PROCNT_value,CHOLE_value,
  CA_value,FE_value,VITA_RAE_value,VITC_value,THIA_value,RIBF_value,NIA_value,VITB6A_value,VITB12_value,
  VITD_value,TOCPHA_value,VITK1_value,WATER_value;
var MytotalNutrients;
  const settingTotalNutrients=()=>{
    var MytotalNutrients={
      ENERC_KCAL: {
        label: "Energy",
        quantity: ENERC_KCAL_value,
        unit: "kcal"
        },
        FAT: {
        label: "Fat",
        quantity: FAT_value,
        unit: "g"
        },
        CHOCDF: {
        label: "Carbs",
        quantity: CHOCDF_value,
        unit: "g"
        },
      
        FIBTG: {
        label: "Fiber",
        quantity:FIBTG_value,
        unit: "g"
        },
        SUGAR: {
        label: "Sugars",
        quantity: SUGAR_value,
        unit: "g"
        },
       
        PROCNT: {
        label: "Protein",
        quantity: PROCNT_value,
        unit: "g"
        },
        CHOLE: {
        label: "Cholesterol",
        quantity: CHOLE_value,
        unit: "mg"
        },
       
        CA: {
        label: "Calcium",
        quantity: CA_value,
        unit: "mg"
        },
       
       
        FE: {
        label: "Iron",
        quantity: FE_value,
        unit: "mg"
        },
       
        
        VITA_RAE: {
        label: "Vitamin A",
        quantity: VITA_RAE_value,
        unit: "µg"
        },
        VITC: {
        label: "Vitamin C",
        quantity:VITC_value,
        unit: "mg"
        },
        THIA: {
        label: "Thiamin (B1)",
        quantity: THIA_value,
        unit: "mg"
        },
        RIBF: {
        label: "Riboflavin (B2)",
        quantity: RIBF_value,
        unit: "mg"
        },
        NIA: {
        label: "Niacin (B3)",
        quantity: NIA_value,
        unit: "mg"
        },
        VITB6A: {
        label: "Vitamin B6",
        quantity: VITB6A_value,
        unit: "mg"
        },
        
       
       
        VITB12: {
        label: "Vitamin B12",
        quantity: VITB12_value,
        unit: "µg"
        },
        VITD: {
        label: "Vitamin D",
        quantity: VITD_value,
        unit: "µg"
        },
        TOCPHA: {
        label: "Vitamin E",
        quantity: TOCPHA_value,
        unit: "mg"
        },
        VITK1: {
        label: "Vitamin K",
        quantity: VITK1_value,
        unit: "µg"
        },
       
        WATER: {
        label: "Water",
        quantity: WATER_value,
        unit: "g"
        }
 

   }
    setRecipe({...recipe , totalNutrients:MytotalNutrients})
    console.log(MytotalNutrients)
//     setRecipe({...recipe, totalNutrients:{ ENERC_KCAL: {
//       label: "Energy",
//       quantity: ENERC_KCAL_value,
//       unit: "kcal"
//   },
//    FAT: {
//     label: "FAT",
//     quantity: FAT_value,
//     unit: "kcal"
// }}}
// )
 
//   console.log(recipe.totalNutrients)
   
     }

  return (
    <>
      {" "}
      <form>
        <div className="scene">
          <div className="card">
            <div className="face front">
              <div className="d-flex blankRecipe">
                <div
                  className="p-1 imageBox flex-fill bd-highlight"
                  style={{ width: "50%" }}
                >
                  <input
                    type="file"
                    className="fileToUpload mx-auto hidden"
                    id="imgInp"
                    name="image"
                    onChange={loadFile}
                  
                  />
                  <img id="output" height="300px" width="300px" />
                </div>

                <div
                  className="p-1 flex-fill bd-highlight"
                  style={{ width: "50%" }}
                >
                  <div className="form-outline">
                    <input
                      type="text"
                      id="label"
                      name="label"
                      placeholder="Enter the title"
                      className="form-control border-dark"
                      onChange={onchangelabel}
                    />

                    <h5 className="card-text text-center fw-bold text-dark">
                      {" "}
                      INGRIDIANTS
                    </h5>
                    <p className="card-text text-dark">
                      {/* <textarea className="form-control" id="textAreaExample" placeholder="Enter the Ingrediants" rows="3"></textarea> */}
                      <input
                        type="text"
                        name="account[first_Ingrediant]"
                        className="form-control border-dark"
                        placeholder="Enter the first Ingrediant"
                        data-bs-toggle="modal" data-bs-target="#exampleModal1"
                      />
                      <input
                        type="text"
                        name="account[Second_ingrediant]"
                        className="form-control mt-1 border-dark"
                        placeholder="Enter the Second Ingrediant"
                        data-bs-toggle="modal" data-bs-target="#exampleModal2"
                      />

                      <input
                        type="text"
                        name="account[third_Ingrediant]"
                        className="form-control mt-1 border-dark"
                        placeholder="Enter the third Ingrediant"
                        data-bs-toggle="modal" data-bs-target="#exampleModal3"
                      />
                      <div
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Add More Ingrediants"
                      >
                        <i
                          className=" fs-4 fa-solid  fa-circle-plus text-dark mt-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        ></i>
                      </div>
                    </p>

                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal_additional_details"
                    >
                      Add Recipe
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-footer text-muted">
                <table className="table table-borderless table-hover  text-dark">
                  <tbody>
                    <tr>
                      <td style={{ color: "white", background: "	red" }}>
                        Caution
                      </td>
                      <td style={{ color: "white", background: "	red" }}>
                        {/* {props.caution.toString().length > 2
                  ? props.caution.slice(0, 2).toString()
                  : "___"} */}
                        <input
                          type="text"
                         
                          placeholder="Enter the caution"
                          className="form-control border-dark"
                          name="cautions"
                          id="cautions"
                        onChange={onchange}
                        />
                      </td>
                      <td style={{ color: "white", background: "	green" }}>
                        Source:&#8594;
                      </td>
                      <td style={{ color: "white", background: "	green" }}>
                        {/* {props.source} */}
                        <input
                          type="text"
                          id="source"
                          placeholder="Enter the source"
                          className="form-control border-dark"
                          name="source"
                          onChange={onchange}

                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* modal after clicking the add item */}
        <div
          className="modal"
          id="exampleModal_additional_details"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Additional Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-outline">
                  <label className="form-label text-dark fw-bold" for="typeURL">
                    Enter Source Url
                  </label>
                  <input type="url" id="url" className="form-control" name="url" onChange={onchange} />
                </div>
                <div className="form-outline">
                  <label className="form-label text-dark fw-bold" for="typeURL">
                    Enter calories
                  </label>
                  <input type="number"  className="form-control" name="calories"  id="calories" onChange={onchange}/>
                </div>
                <div className="form-outline">
                  <label className="form-label text-dark fw-bold" for="typeURL">
                    Enter TotalWeight
                  </label>
                  <input type="number"  className="form-control" name="totalWeight"  id="totalWeight" onChange={onchange} />
                </div>
                <div className="form-outline">
                  <label className="form-label text-dark fw-bold" for="typeURL">
                    Enter TotalTime
                  </label>
                  <input type="number" id="totalTime" className="form-control" name="totalTime"   onChange={onchange} />
                </div>
                {/* dietlabels */}
                  <label className="form-label text-dark fw-bold">
                  Choose the Diet Labels
                </label>
                <select multiple="multiple" class="form-select" id="dietLabels" name="dietLabels" onChange={onchangearray}>


              

      <option value="balanced"> balanced  </option>


      <option value="high-fiber"> high-fiber  </option>


      <option value="high-protein"> high-protein  </option>


      <option value="low-carb"> low-carb  </option>


      <option value="low-fat"> low-fat  </option>


      <option value="low-sodium"> low-sodium  </option>


  </select>

                {/* healthLabel */}
                <label className="form-label text-dark fw-bold">
                  Choose the Health Labels
                </label>
                <select multiple="multiple" className="form-select" name="healthLabels" id="healthLabels" onChange={onchangearray}>
                  <option value="alcohol-cocktail"> alcohol-cocktail </option>

                  <option value="alcohol-free"> alcohol-free </option>

                  <option value="celery-free"> celery-free </option>

                  <option value="crustacean-free"> crustacean-free </option>

                  <option value="dairy-free"> dairy-free </option>

                  <option value="DASH"> DASH </option>

                  <option value="egg-free"> egg-free </option>

                  <option value="fish-free"> fish-free </option>

                  <option value="fodmap-free"> fodmap-free </option>

                  <option value="gluten-free"> gluten-free </option>

                  <option value="immuno-supportive"> immuno-supportive </option>

                  <option value="keto-friendly"> keto-friendly </option>

                  <option value="kidney-friendly"> kidney-friendly </option>

                  <option value="kosher"> kosher </option>

                  <option value="low-fat-abs"> low-fat-abs </option>

                  <option value="low-potassium"> low-potassium </option>

                  <option value="low-sugar"> low-sugar </option>

                  <option value="lupine-free"> lupine-free </option>

                  <option value="Mediterranean"> Mediterranean </option>

                  <option value="mollusk-free"> mollusk-free </option>

                  <option value="mustard-free"> mustard-free </option>

                  <option value="no-oil-added"> no-oil-added </option>

                  <option value="paleo"> paleo </option>

                  <option value="peanut-free"> peanut-free </option>

                  <option value="pescatarian"> pescatarian </option>

                  <option value="pork-free"> pork-free </option>

                  <option value="red-meat-free"> red-meat-free </option>

                  <option value="sesame-free"> sesame-free </option>

                  <option value="shellfish-free"> shellfish-free </option>

                  <option value="soy-free"> soy-free </option>

                  <option value="sugar-conscious"> sugar-conscious </option>

                  <option value="sulfite-free"> sulfite-free </option>

                  <option value="tree-nut-free"> tree-nut-free </option>

                  <option value="vegan"> vegan </option>

                  <option value="vegetarian"> vegetarian </option>

                  <option value="wheat-free"> wheat-free </option>
                </select>

                {/* crusine type */}
                <label className="form-label text-dark fw-bold">
                  Choose the cuisine Type
                </label>
                <select
                  multiple="multiple"
                  className="form-select"
                  name="cuisineType"
                  id="cuisineType"
                  onChange={onchangearray}
                >
                  <option value="American"> American </option>

                  <option value="Asian"> Asian </option>

                  <option value="British"> British </option>

                  <option value="Caribbean"> Caribbean </option>

                  <option value="Central Europe"> Central Europe </option>

                  <option value="Chinese"> Chinese </option>

                  <option value="Eastern Europe"> Eastern Europe </option>

                  <option value="French"> French </option>

                  <option value="Indian"> Indian </option>

                  <option value="Italian"> Italian </option>

                  <option value="Japanese"> Japanese </option>

                  <option value="Kosher"> Kosher </option>

                  <option value="Mediterranean"> Mediterranean </option>

                  <option value="Mexican"> Mexican </option>

                  <option value="Middle Eastern"> Middle Eastern </option>

                  <option value="Nordic"> Nordic </option>

                  <option value="South American"> South American </option>

                  <option value="South East Asian"> South East Asian </option>
                </select>
                {/* meal type */}

                <label className="form-label text-dark fw-bold">
                  Choose the Meal Type
                </label>
                <select multiple="multiple" className="form-select" name="mealType" id="mealType"  onChange={onchangearray}>
                  <option value="Breakfast"> Breakfast </option>

                  <option value="Dinner"> Dinner </option>

                  <option value="Lunch"> Lunch </option>

                  <option value="Snack"> Snack </option>

                  <option value="Teatime"> Teatime </option>
                </select>
                {/* dish type */}
                <label className="form-label text-dark fw-bold">
                  Choose the Dish Type
                </label>
                <select multiple="multiple" className="form-select" name="dishType" id="dishType"  onChange={onchangearray}>
                  <option value="Biscuits and cookies">
                    {" "}
                    Biscuits and cookies{" "}
                  </option>

                  <option value="Bread"> Bread </option>

                  <option value="Cereals"> Cereals </option>

                  <option value="Condiments and sauces">
                    {" "}
                    Condiments and sauces{" "}
                  </option>

                  <option value="Desserts"> Desserts </option>

                  <option value="Drinks"> Drinks </option>

                  <option value="Main course"> Main course </option>

                  <option value="Pancake"> Pancake </option>

                  <option value="Preps"> Preps </option>

                  <option value="Preserve"> Preserve </option>

                  <option value="Salad"> Salad </option>

                  <option value="Sandwiches"> Sandwiches </option>

                  <option value="Side dish"> Side dish </option>

                  <option value="Soup"> Soup </option>

                  <option value="Starter"> Starter </option>

                  <option value="Sweets"> Sweets </option>
                </select>
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal_nutritional_details"
                >
                  Add Nutritional Details
                </button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={RecipeAdder}  data-bs-dismiss="modal">
                  Add Recipe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* modal for adding more Ingrediant */}
        <div
          className="modal"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ingrediants
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-outline">
                  <input
                    type="text"
                    id="typeText"
                    className="form-control border-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal4"
                  />
                  <label className="form-label fw-bold" for="typeText">
                    Fourth Ingrediants
                  </label>
                </div>
                <div className="form-outline">
                  <input type="text" id="typeText" className="form-control"  data-bs-toggle="modal"
                          data-bs-target="#exampleModal5" />
                  <label className="form-label fw-bold" for="typeText">
                    Fifth Ingrediants
                  </label>
                </div>
                <div className="form-outline">
                  <input type="text" id="typeText" className="form-control"  data-bs-toggle="modal"
                          data-bs-target="#exampleModal6" />
                  <label className="form-label fw-bold" for="typeText">
                    Sixeth Ingrediants
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* modal for adding totalNutrients */}
        <div
          className="modal"
          id="exampleModal_nutritional_details"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ingrediants
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nutrient</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">units</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Energy</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="ENERC_KCAL"
                          name="ENERC_KCAL"
                            className="form-control"
                            placeholder="Enter Quantity"
                            required
                            onChange={(e)=>{
                            
                             ENERC_KCAL_value= e.target.value
                           
                           
                            }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">2</th>
                      <td>Fat</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="FAT"
                            name="FAT"
                            className="form-control"
                            placeholder="Enter Quantity"
                               required
                            onChange={(e)=>{
                              FAT_value= e.target.value
                            
                             
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Carbs</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="CHOCDF"
                            name="CHOCDF"
                            className="form-control"
                            placeholder="Enter Quantity"
                               required
                            onChange={(e)=>{
                              CHOCDF_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                            
                          />

                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">4</th>
                      <td>Fiber</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="FIBTG"
                            name="FIBTG"
                            className="form-control"
                            placeholder="Enter Quantity"
                               required
                            onChange={(e)=>{
                              FIBTG_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">5</th>
                      <td>Sugars</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="SUGAR"
                            name="SUGAR"
                            className="form-control"
                            placeholder="Enter Quantity"
                               required
                            onChange={(e)=>{
                              SUGAR_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Protein</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="PROCNT"
                            name="PROCNT"
                            className="form-control"
                            placeholder="Enter Quantity"
                            onChange={(e)=>{
                              PROCNT_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Cholesterol</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                          
                           
                            id="CHOLE"
                            name="CHOLE"
                            className="form-control"
                            placeholder="Enter Quantity"
                            onChange={(e)=>{
                              CHOLE_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Calcium</td>
                      <td>
                        <div className="form-outline">
                          <input
                          type="number"
                           id="CA"
                           name="CA"
                            className="form-control"
                            placeholder="Enter Quantity"
                            onChange={(e)=>{
                              CA_value= e.target.value
                            
                            
                             }}
                           
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Iron</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="FE"
                            name="FE"
                            className="form-control"
                            placeholder="Enter Quantity"
                            onChange={(e)=>{
                              FE_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Vitamin A</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="VITA_RAE"
                            name="VITA_RAE"
                            className="form-control"
                            placeholder="Enter Quantity"
                            onChange={(e)=>{
                              VITA_RAE_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>Vitamin C</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="VITC"
                            name="VITC"
                            className="form-control"
                            placeholder="Enter Quantity"
                            onChange={(e)=>{
                              VITC_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td>Thiamin B1</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="THIA"
                            name="THIA"
                            className="form-control"
                            placeholder="Enter Quantity"
                            onChange={(e)=>{
                              THIA_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">13</th>
                      <td>Riboflavin B2</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="RIBF"
                            name="RIBF"
                            className="form-control"
                            placeholder="Enter Quantity"
                            onChange={(e)=>{
                              RIBF_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">14</th>
                      <td>Niacin B3</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="NIA"
                            name="NIA"
                            className="form-control"
                            placeholder="Enter Quantity"
                            onChange={(e)=>{
                              NIA_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">15</th>
                      <td>Vitamin B6</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="VITB6A"
                            name="VITB6A"
                            className="form-control"
                            placeholder="Enter Quantity"
                            onChange={(e)=>{
                              VITB6A_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">16</th>
                      <td> Vitamin B12</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="VITB12"
                            name="VITB12"
                            className="form-control"
                            placeholder="Enter Quantity"
                            onChange={(e)=>{
                              VITB12_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">17</th>
                      <td>Vitamin D</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            iid="VITD"
                            name="VITD"
                            className="form-control"
                            placeholder="Enter Quantity"
                            onChange={(e)=>{
                              VITD_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">18</th>
                      <td>Vitamin E</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="TOCPHA"
                            name="TOCPHA"
                            className="form-control"
                            placeholder="Enter Quantity"
                            onChange={(e)=>{
                              TOCPHA_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">19</th>
                      <td>Vitamin K</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="VITK1"
                            name="VITK1"
                            className="form-control"
                            placeholder="Enter Quantity"
                            onChange={(e)=>{
                              VITK1_value= e.target.value
                            
                            
                             }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">20</th>
                      <td>Water</td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="number"
                            id="WATER"
                            name="WATER"
                            className="form-control"
                        placeholder="Enter Quantity"
                        onChange={(e)=>{
                          WATER_value= e.target.value
                        
                        
                         }}
                          />

                        </div>
                      </td>
                      <td>
                        <div className="form-outline">
                          <input
                            type="text"
                            id="typeNumber"
                            className="form-control"
                            placeholder="Enter the units"
                          />

                        </div>
                      </td>
                    </tr>
                  
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={settingTotalNutrients}  data-bs-dismiss="modal">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* modal for adding Ingrediants details */}
       {/* <IngrediantsDetails number="first" modal={1}></IngrediantsDetails>
       <IngrediantsDetails number="second" modal={2}></IngrediantsDetails>
       <IngrediantsDetails number="third" modal={3}></IngrediantsDetails>
       <IngrediantsDetails number="fourth" modal={4}></IngrediantsDetails>
       <IngrediantsDetails number="fifth" modal={5}></IngrediantsDetails>
       <IngrediantsDetails number="sixed" modal={6}></IngrediantsDetails> */}
      </form>
    </>
  );
}
