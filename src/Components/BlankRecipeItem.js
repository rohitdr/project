import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import RecipeContext from "../Context/RecipeContext";
import IngrediantsDetails from "./Modals/IngrediantsDetails";

export default function BlankRecipeItem() {
//   const context = useContext(RecipeContext)
//   const {Ingrediant_statepage} = context

//   let arr =[""];
//   const getselectedElement=(name)=>{
//     var options = document.getElementById(`${name}`).selectedOptions;
//     var Values = Array.from(options).map(({ value }) => value);
//     return Values;
//   }

//   const [recipe, setRecipe]=useState({
//     label:"",
//     image:"",
    
//     source: "",
//     url: "",
    
//     dietLabels: [],
//     healthLabels: [],
//     cautions: [],
//     ingredientLines: [],
//     ingredients: [],
//     // "ingredients": [
//     // {
//     // "text": "2 cups cranberries, picked over",
//     // "quantity": 2,
//     // "measure": "cup",
//     // "food": "cranberries",
//     // "weight": 220,
//     // "foodCategory": "fruit",
//     // "foodId": "food_at0yaana2e4sguapnr728bkczyk9",
//     // "image": "https://www.edamam.com/food-img/945/94511bef5e26f15bb6eac8e950ac79a9.jpg"
//     // },
//     // {
//     // "text": "2 cups water",
//     // "quantity": 2,
//     // "measure": "cup",
//     // "food": "water",
//     // "weight": 474,
//     // "foodCategory": "water",
//     // "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
//     // "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
//     // },
//     // {
//     // "text": "2 cups sugar (see head notes)",
//     // "quantity": 2,
//     // "measure": "cup",
//     // "food": "sugar",
//     // "weight": 400,
//     // "foodCategory": "sugars",
//     // "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
//     // "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
//     // }
//     // ],
//     calories: 0,
//     totalWeight:0,
//     totalTime: 0,
//     cuisineType: [
//     ],
//     mealType: [
   
//     ],
//     dishType: [
  
//     ],
//     totalNutrients: {
//     ENERC_KCAL: {
//     label: "Energy",
//     quantity: 0,
//     unit: "kcal"
//     },
//     FAT: {
//     label: "Fat",
//     quantity: 0,
//     unit: "g"
//     },
//     CHOCDF: {
//     label: "Carbs",
//     quantity: 0,
//     unit: "g"
//     },
  
//     FIBTG: {
//     label: "Fiber",
//     quantity:0,
//     unit: "g"
//     },
//     SUGAR: {
//     label: "Sugars",
//     quantity: 0,
//     unit: "g"
//     },
   
//     PROCNT: {
//     label: "Protein",
//     quantity: 0,
//     unit: "g"
//     },
//     CHOLE: {
//     label: "Cholesterol",
//     quantity: 0,
//     unit: "mg"
//     },
   
//     CA: {
//     label: "Calcium",
//     quantity: 0,
//     unit: "mg"
//     },
   
   
//     FE: {
//     label: "Iron",
//     quantity: 0,
//     unit: "mg"
//     },
   
    
//     VITA_RAE: {
//     label: "Vitamin A",
//     quantity: 0,
//     unit: "µg"
//     },
//     VITC: {
//     label: "Vitamin C",
//     quantity:0,
//     unit: "mg"
//     },
//     THIA: {
//     label: "Thiamin (B1)",
//     quantity: 0,
//     unit: "mg"
//     },
//     RIBF: {
//     label: "Riboflavin (B2)",
//     quantity: 0,
//     unit: "mg"
//     },
//     NIA: {
//     label: "Niacin (B3)",
//     quantity: 0,
//     unit: "mg"
//     },
//     VITB6A: {
//     label: "Vitamin B6",
//     quantity: 0,
//     unit: "mg"
//     },
    
   
   
//     VITB12: {
//     label: "Vitamin B12",
//     quantity: 0,
//     unit: "µg"
//     },
//     VITD: {
//     label: "Vitamin D",
//     quantity: 0,
//     unit: "µg"
//     },
//     TOCPHA: {
//     label: "Vitamin E",
//     quantity: 0,
//     unit: "mg"
//     },
//     VITK1: {
//     label: "Vitamin K",
//     quantity: 0,
//     unit: "µg"
//     },
   
//     WATER: {
//     label: "Water",
//     quantity: 0,
//     unit: "g"
//     }}
//   }
//     )
 
//   const RecipeAdder=()=>{
//     console.log("started")
    
 

//     console.log(recipe)
//     console.log("adding")
   
//   }
//   const loadFile = (event) => {
//     var output = document.getElementById("output");
//     output.src = URL.createObjectURL(event.target.files[0]);
//     output.onload = function () {
//       URL.revokeObjectURL(output.src); // free memory
//       onchangeimage(event)
//     };
//   }
//   const onchangelabel=(e)=>{
//      setRecipe({...recipe, label : e.target.value})
   
//   }
//   const onchangeimage=(e)=>{
//     setRecipe({...recipe, image : e.target.value})
//   }
//   const onchange=(e)=>{
//     setRecipe({...recipe, [e.target.name] : e.target.value})
  
//   }
 
//   const onchangearray=(e)=>{
//  let Values=getselectedElement(e.target.name)
//     setRecipe({...recipe, [e.target.name] : Values})

//   }

//   var ENERC_KCAL_value,FAT_value,CHOCDF_value,FIBTG_value,SUGAR_value,PROCNT_value,CHOLE_value,
//   CA_value,FE_value,VITA_RAE_value,VITC_value,THIA_value,RIBF_value,NIA_value,VITB6A_value,VITB12_value,
//   VITD_value,TOCPHA_value,VITK1_value,WATER_value;
// var MytotalNutrients;
//   const settingTotalNutrients=()=>{
 
//     var MytotalNutrients={
//       ENERC_KCAL: {
//         label: "Energy",
//         quantity: ENERC_KCAL_value,
//         unit: "kcal"
//         },
//         FAT: {
//         label: "Fat",
//         quantity: FAT_value,
//         unit: "g"
//         },
//         CHOCDF: {
//         label: "Carbs",
//         quantity: CHOCDF_value,
//         unit: "g"
//         },
      
//         FIBTG: {
//         label: "Fiber",
//         quantity:FIBTG_value,
//         unit: "g"
//         },
//         SUGAR: {
//         label: "Sugars",
//         quantity: SUGAR_value,
//         unit: "g"
//         },
       
//         PROCNT: {
//         label: "Protein",
//         quantity: PROCNT_value,
//         unit: "g"
//         },
//         CHOLE: {
//         label: "Cholesterol",
//         quantity: CHOLE_value,
//         unit: "mg"
//         },
       
//         CA: {
//         label: "Calcium",
//         quantity: CA_value,
//         unit: "mg"
//         },
       
       
//         FE: {
//         label: "Iron",
//         quantity: FE_value,
//         unit: "mg"
//         },
       
        
//         VITA_RAE: {
//         label: "Vitamin A",
//         quantity: VITA_RAE_value,
//         unit: "µg"
//         },
//         VITC: {
//         label: "Vitamin C",
//         quantity:VITC_value,
//         unit: "mg"
//         },
//         THIA: {
//         label: "Thiamin (B1)",
//         quantity: THIA_value,
//         unit: "mg"
//         },
//         RIBF: {
//         label: "Riboflavin (B2)",
//         quantity: RIBF_value,
//         unit: "mg"
//         },
//         NIA: {
//         label: "Niacin (B3)",
//         quantity: NIA_value,
//         unit: "mg"
//         },
//         VITB6A: {
//         label: "Vitamin B6",
//         quantity: VITB6A_value,
//         unit: "mg"
//         },
        
       
       
//         VITB12: {
//         label: "Vitamin B12",
//         quantity: VITB12_value,
//         unit: "µg"
//         },
//         VITD: {
//         label: "Vitamin D",
//         quantity: VITD_value,
//         unit: "µg"
//         },
//         TOCPHA: {
//         label: "Vitamin E",
//         quantity: TOCPHA_value,
//         unit: "mg"
//         },
//         VITK1: {
//         label: "Vitamin K",
//         quantity: VITK1_value,
//         unit: "µg"
//         },
       
//         WATER: {
//         label: "Water",
//         quantity: WATER_value,
//         unit: "g"
//         }
 

//    }
//     setRecipe({...recipe , totalNutrients:MytotalNutrients})
    
//     console.log(MytotalNutrients)
// //     setRecipe({...recipe, totalNutrients:{ ENERC_KCAL: {
// //       label: "Energy",
// //       quantity: ENERC_KCAL_value,
// //       unit: "kcal"
// //   },
// //    FAT: {
// //     label: "FAT",
// //     quantity: FAT_value,
// //     unit: "kcal"
// // }}}
// // )
 
// //   console.log(recipe.totalNutrients)
   
//      }

  return (
    <>
 <form>
        <div className="scene ">
          <div className="card ">
          <div class="face front ">
     <div className="d-flex blankRecipe">
          <div
            className="p-1 flex-fill bd-highlight"
            style={{ width: "50%" }}
          >
            <img
             
              src="RecipeImages/Candy Apple Recipe1.jpg"
              className="card-img-top rounded"
              alt=""
              style={{ zIndex:"1" }}
        
              height="300px"
              width="500px"
            />
        
          </div>
       
          <div className="p-1 flex-fill bd-highlight   " style={{ width: "50%" }}  >
            <h4 className={`fw-bold text-dark`}>
            Vanilla Ice Cream With Grilled Corn And Lime
            </h4>
            <p className={`card-text text-dark`} style={{textAlign:"justify"}}>
            Vegetarian,Pescatarian,Gluten-Free,Wheat-Free,Egg-Free,Peanut-Free,Tree-Nut-Free,Soy-Free,Fish-Free,Shellfish-Free,Pork-.......
            </p>
            <h5
              className={`card-text text-center fw-bold text-dark`}
            >
              {" "}
              INGRIDIANTS
            </h5>
            <p className={`card-text text-dark`}>
            Good vanilla ice cream about 1/2 cup per person and or as .....
            </p>
          </div>
        
        </div>
        <Link class="btn btn-dark fw-bold btn-lg position-absolute translate-middle badge_blank" role="button"  style={{opacity:"1"}} to="/Add_Recipe">ADD recipe</Link>
        <div className="card-footer text-muted blankRecipe">
        
          <table
            className={`table table-borderless table-hover  text-white`}
          >
            <tbody>
              <tr>
                <td style={{ color: "white", background: "	red" }}>Caution</td>
                <td style={{ color: "white", background: "	red" }}>
                Sulfites
                </td>
                <td style={{ color: "white", background: "	green" }}>
                  Source:&#8594;
                </td>
                <td style={{ color: "white", background: "	green" }}>
                Ruhlman
                </td>
              </tr>
            </tbody>
          </table>
         
        </div>
     
         
        
        
        
        
        </div>
          </div>
        </div>
      

    

     
      </form>
    
    </>
  );
}
